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
        <div>
          <h5 class="selected-topic">- SELECTED TOPIC -</h5>
          <p class="question-text">
            {{ $store.state.selectedTopicQuestion }}
          </p>
        </div>
        <div class="recording-element-container">
          <div class="video-wrapper">
            <video id="recording-video"></video>
          </div>
          <div class="controller-wrapper">
            <div class="recording-timer-wrapper">
              <circular-visual-recording-timer
                class="recording-timer"
                :is-recording="isRecording"
                :id="'recording-timer'"
                :diameter="300"
                :outline-color="'#efdfd4'"
                :indicator-color="'red'"
                :circle-fill-color="'black'"
                :text-color="'#efdfd4'"
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
                <text-button
                 v-show="isRecording"
                 class="text-button"
                 :width="'300px'"
                 :height="'120px'"
                 :border-radius="'20px'"
                 :font="'bold 40px Arquitecta'"
                 :letter-spacing="'3px'"
                 :text-content="'STOP<br/>RECORDING'"
                 :regular-bg-color="'#47673b'"
                 :regular-text-color="'#efdfd4'"
                 :active-bg-color="'#efdfd4'"
                 :active-text-color="'#47673b'"
                 @clicked="stopRecording()"
                />
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
      recorder: null,
      mediaStream: null,
      videoElement: null,
      isStreamReady: false,
      isRecording: false
    }
  },
  mounted () {
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
  computed: {
    getRecordingMaxLength () {
      return CONSTANTS.RECORDING_MAX_LENGTH
    },
    getTextButtonStyle () {
      return this.isStreamReady ? '' : {filter: 'opacity(30%)'}
    }
  },
  methods: {
    /* submits recorded blob to nodejs server */
    postFiles () {
      let blob = this.recorder.getBlob()

      // getting unique identifier for the file name
      let fileName = this.generateRandomString() + '.webm'

      let file = new File([blob], fileName, {
        type: 'video/webm'
      })

      // this.videoElement.src = ''
      // this.videoElement.poster = require('@/assets/images/ajax-loader.gif')

      const D = this
      this.xhr(CONSTANTS.VIDEO_SERVER_URL, file, (responseText) => {
        // let fileURL = JSON.parse(responseText).fileURL
        //
        // console.info('fileURL', fileURL)
        // D.videoElement.src = fileURL
        // D.videoElement.play()
        // D.videoElement.muted = false
        // D.videoElement.controls = true // NEEDS TO BE FALSE

        // document.querySelector('#footer-h2').innerHTML = '<a href="' + videoElement.src + '">' + videoElement.src + '</a>';
        D.jumpTo('recording-finish')
      })

      // if (this.mediaStream) this.mediaStream.stop()
    },
    /* XHR2/FormData */
    xhr (url, data, callback) {
      let request = new XMLHttpRequest()
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          callback(request.responseText)
        }
      }

      // request.upload.onprogress = function (event) {
      //     progressBar.max = event.total
      //     progressBar.value = event.loaded
      //     progressBar.innerHTML = 'Upload Progress ' + Math.round(event.loaded / event.total * 100) + "%";
      // };
      //
      // request.upload.onload = function() {
      //     percentage.style.display = 'none';
      //     progressBar.style.display = 'none';
      // };
      request.open('POST', url)

      let formData = new FormData()
      formData.append('file', data)
      request.send(formData)
    },
    /* generating random string */
    generateRandomString () {
      if (window.crypto) {
        let a = window.crypto.getRandomValues(new Uint32Array(3))
        let token = ''
        for (let i = 0; i < a.length; i++) {
          token += a[i].toString(36)
        }
        return token
      } else {
        return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '')
      }
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
      this.isRecording = true
      this.recorder = RecordRTC(this.mediaStream, {
        type: 'video'
      })
      this.recorder.startRecording()
    },
    /* stop recording */
    stopRecording () {
      this.isRecording = false // NEED TO BE REMOVED
      this.recorder.stopRecording(this.postFiles)
    },
    timeOver () {
      console.log('time over!!!')
      this.stopRecording()
    }
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.page-wrapper {
  height: 100%;
  position: relative;
}

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

main h5.selected-topic {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 40px;
}

main p.question-text {
  font-size: 50px;
  font-family: 'HoeflerText Regular';
  text-align: center;
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
  width: 912px;
  height: 513px;
  /* background-color: green; */
}

main video {
  width: 100%;
  height: 100%;

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
