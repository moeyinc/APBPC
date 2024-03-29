<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="true"
      :back-to="'recording-topics'"
    />
    <header>
      <h2>RECORD YOUR OWN STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div class="selected-topic-wrapper">
          <h5 class="selected-topic">- SELECTED TOPIC -</h5>
          <p class="question-text" :style="{fontSize: questionTextFontSize + 'px'}">
            {{ $store.state.selectedTopic }}
          </p>
        </div>
        <div class="recording-element-container">
          <div class="video-wrapper">
            <div v-show="isPlayingCountDown" class="animation-layer">
              <p class="timer-label">
                {{ countDownTimer }}
              </p>
            </div>
            <div v-show="isRecording" class="recording-indicator">
              RECORDING
            </div>
            <video id="recording-video"></video>
          </div>
          <div class="controller-wrapper">
            <div class="recording-timer-wrapper">
              <circular-visual-recording-timer
                class="recording-timer"
                :is-recording="isRecording"
                :id="'recording-timer'"
                :diameter="300"
                :outline-color="'white'"
                :indicator-color="'red'"
                :circle-fill-color="'black'"
                :text-color="'white'"
                :outline-width="30"
                :max-time="getRecordingMaxLength"
                :label-content="'Time Remaining'"
                :label-font="'25px Arquitecta'"
                :label-top="'85px'"
                :time-font="'bold 80px Arquitecta'"
                @time-over="timeOver"
              />
            </div>
            <div class="under-timer-wrapper">
              <div class="under-timer-inner">
                <text-button
                  v-show="!isRecording"
                  class="text-button"
                  :style="getTextButtonStyle"
                  :width="'300px'"
                  :height="'120px'"
                  :border-radius="'20px'"
                  :font="'bold 40px Arquitecta'"
                  :letter-spacing="'3px'"
                  :text-content="'START<br/>RECORDING'"
                  :regular-bg-color="'red'"
                  :regular-text-color="'#efdfd4'"
                  :active-bg-color="'#efdfd4'"
                  :active-text-color="'red'"
                  @clicked="startRecording()"
                 />
                 <div class="recording-button-container">
                   <text-button
                     v-show="isRecording"
                     class="text-button"
                     :width="'160px'"
                     :height="'80px'"
                     :border-radius="'14px'"
                     :font="'bold 25px Arquitecta'"
                     :letter-spacing="'3px'"
                     :text-content="'OOPS!<br/>RESTART'"
                     :regular-bg-color="'#47673b'"
                     :regular-text-color="'#efdfd4'"
                     :active-bg-color="'#efdfd4'"
                     :active-text-color="'#47673b'"
                     @clicked="reset()"
                   />
                   <text-button
                    v-show="isRecording"
                    class="text-button"
                    :width="'250px'"
                    :height="'120px'"
                    :border-radius="'20px'"
                    :font="'bold 40px Arquitecta'"
                    :letter-spacing="'3px'"
                    :text-content="'FINISH'"
                    :regular-bg-color="'red'"
                    :regular-text-color="'#efdfd4'"
                    :active-bg-color="'#efdfd4'"
                    :active-text-color="'red'"
                    @clicked="stopRecording()"
                   />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
    </footer>
  </div>
</template>


<!-- =================================================
 Vue Script
================================================== -->
<script>
import PageAside from '@/components/page-components/PageAside'
import CircularVisualRecordingTimer from '@/components/reusables/CircularVisualRecordingTimer'
import TextButton from '@/components/reusables/TextButton'
import RecordRTC from 'recordrtc'
import CONSTANTS from '@/../static/constants'

export default {
  name: 'record-record-story',
  components: {
    PageAside, CircularVisualRecordingTimer, TextButton
  },
  data () {
    return {
      questionTextFontSize: 50,
      recorder: null,
      mediaStream: null,
      videoElement: null,
      isStreamReady: false,
      isRecording: false,
      isPlayingCountDown: false,
      countDownTimer: 3
    }
  },
  mounted () {
    this.initVideo()
    this.adjustFontSize()
  },
  computed: {
    getRecordingMaxLength () {
      return CONSTANTS.RECORDING_MAX_LENGTH
    },
    getTextButtonStyle () {
      return this.isStreamReady ? '' : {filter: 'opacity(30%)'}
    }
  },
  methods: {
    initVideo () {
      this.videoElement = document.getElementById('recording-video')
      const D = this
      this.captureUserMedia((stream) => {
        D.mediaStream = stream

        D.videoElement.src = window.URL.createObjectURL(stream)
        D.videoElement.play()
        D.videoElement.muted = true
        D.videoElement.controls = false

        this.isStreamReady = true
      })
    },
    adjustFontSize () {
      let containerWidth = this.$el.querySelector('.selected-topic-wrapper').clientWidth
      let contentWidth = this.$el.querySelector('.question-text').clientWidth
      // console.log('INITIAL content width', contentWidth)

      const D = this
      let reduceFontSize = function (containerWidth, contentWidth, callback) {
        if (contentWidth > containerWidth) {
          D.questionTextFontSize--
          D.$nextTick().then(() => {
            contentWidth = D.$el.querySelector('.question-text').clientWidth
            // console.log('FIXED content width', contentWidth)
            callback(containerWidth, contentWidth, callback)
          })
        } else {
          // console.log('done')
        }
      }

      reduceFontSize(containerWidth, contentWidth, reduceFontSize)
    },
    /* reusable getUserMedia */
    captureUserMedia (successCallback) {
      var session = {
        audio: true,
        video: CONSTANTS.VIDEO_SIZE
      }
      console.log('caotyring user media')

      navigator.getUserMedia(session, successCallback, (error) => {
        alert('Unable to capture your camera. Please check console logs.')
        console.error(error)
      })
    },
    /* start recording */
    startRecording () {
      this.startCountDown().then(() => {
        this.isRecording = true
        this.recorder = RecordRTC(this.mediaStream, {
          type: 'video'
        })
        this.recorder.startRecording()
      })
    },
    startCountDown () {
      this.isPlayingCountDown = true
      this.countDownTimer = 3 // reset
      const D = this
      return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
          D.countDownTimer--
          if (D.countDownTimer <= 0) {
            console.log('hey')
            clearTimeout(timer)
            D.isPlayingCountDown = false
            resolve()
          }
        }, 1000)
      })
    },
    /* stop recording */
    stopRecording () {
      this.isRecording = false
      if (this.$store.state.selectedTopic) {
        const D = this
        let callback = function () {
          let blob = D.recorder.getBlob()
          let fileName = Math.floor(Date.now() / 1000) + '.webm'
          D.$store.dispatch('uploadVideo', {blob: blob, fileName: fileName})
          .then(() => {
            D.jumpTo('recording-finish', {dir: 'right'})
          })
        }
        this.recorder.stopRecording(callback)
      } else {
        alert('Topic is not selected!')
        this.reset()
      }
    },
    timeOver () {
      console.log('time over!!!')
      this.stopRecording()
    },
    reset () {
      this.recorder.reset()
      this.isRecording = false
    }
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
header {
  position: absolute;
  top: 0px;
  left: 200px;
  width: 1520px;
  height: 230px;
  /* background-color: darkgreen; */
}

header h2 {
  padding-top: 45px;
  font-size: 55px;
  letter-spacing: 3px;
  font-weight: bold;
  text-align: center;
}

hr.top-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 135px;
  left: 200px;
  width: 1520px;
}

main {
  position: absolute;
  top: 135px;
  left: 200px;
  width: 1520px;
  height: 745px;
  /* background-color: brown; */
}

main div.main-inner {
  padding: 50px;
}

main .selected-topic-wrapper {
  text-align: center;
}

main h5.selected-topic {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 1.3em;
  margin-bottom: 40px;
}

main p.question-text {
  display: inline-block;
  font-family: 'HoeflerText Regular';
  margin-bottom: 50px;
  white-space: nowrap;
}

main .recording-element-container {
  position: absolute;
  display: flex;
  left: 50px;
  top: 250px;
  height: 513px;
}

main .video-wrapper {
  position: relative;
  width: 912px;
  height: 513px;
  /* background-color: green; */
}

main .animation-layer {
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.timer-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 300px;
  color: white;
}

.recording-indicator {
  z-index: 100;
  position: absolute;
  color: red;
  font-size: 30px;
  font-weight: bold;
  top: 20px;
  left: 20px;
}

main video {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  /* box-sizing: content-box;
  border-style: solid;
  border-width: 6px;
  border-color: #efdfd4; */
}

main .controller-wrapper {
  width: 504px;
  height: 100%;
  /* background-color: orange; */
}

main .recording-timer-wrapper {
  height: 350px;
  /* background-color: brown; */
  position: relative;
}

main .recording-timer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

main .under-timer-wrapper {
  position: relative;
  height: 163px;
  /* background-color: pink; */
}

main .under-timer-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

.text-button {
  margin: 0 10px;
}

main .recording-button-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

hr.bottom-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 960px;
  left: 200px;
  width: 1520px;
}

footer {
  position: absolute;
  top: 980px;
  left: 200px;
  height: 200px;
  width: 1520px;
  text-align: center;
  padding: 70px;
  /* background-color: purple; */
}

</style>
