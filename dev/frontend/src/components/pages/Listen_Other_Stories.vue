<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="true"
      :back-to="'listening-topics'"
    />
    <header>
      <h2>LISTEN OTHER VISITORS’ STORIES</h2>
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
        <div class="video-area">
          <div class="video-wrapper">
            <video
              autoplay
              controls
              id="watching-video"
              :src="selectedVideoURL"
              @click="playStopVideo()"
            />
            <!-- :poster="require('@/assets/images/poster.png')" -->
          </div>
        </div>
      </div>
    </main>
    <footer :style="getVideoRollLeft">
      <video
        v-for="(item, index) in videoURLs"
        :key="index"
        preload="metadata"
        :src="item"
        :class="{selected: (item === selectedVideoURL) ? true : false}"
        @click="switchVideo(item, index)"
        />
    </footer>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import PageAside from '@/components/page-components/PageAside'
export default {
  name: 'listen-other-stories',
  components: {
    PageAside
  },
  data () {
    return {
      questionTextFontSize: 50,
      videoElement: null,
      videoURLs: [],
      selectedVideoURL: null,
      selectedVideoIndex: 0,
      isPlaying: false
    }
  },
  created () {
    this.$store.dispatch('getVideos')
    .then((fileURLs) => {
      this.videoURLs = fileURLs
      this.selectedVideoURL = this.videoURLs[0]
    })
  },
  mounted () {
    this.videoElement = document.getElementById('watching-video')
    this.adjustFontSize()
  },
  computed: {
    getVideoRollLeft () {
      let left = 864 - this.selectedVideoIndex * (192 + 20)
      return {left: left + 'px'}
    }
  },
  methods: {
    adjustFontSize () {
      let containerWidth = this.$el.querySelector('.selected-topic-wrapper').clientWidth
      let contentWidth = this.$el.querySelector('.question-text').clientWidth
      // console.log('container width', containerWidth)
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
    switchVideo (item, index) {
      this.selectedVideoURL = item
      this.selectedVideoIndex = index
    },
    playStopVideo () {
      this.isPlaying = !this.isPlaying
      if (this.isPlaying) {
        this.videoElement.play()
      } else {
        this.videoElement.pause()
      }
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

main .video-area {
  position: absolute;
  top: 250px;
  left: 0px;
  width: 100%;
  height: 513px;
  text-align: center;
}

main .video-wrapper {
  width: 912px;
  height: 513px;
  margin: 0 auto;
  /* background-color: green; */
}

main video {
  width: 100%;
  height: 100%;
  background-color: black;
  /* box-sizing: content-box;
  border-style: solid;
  border-width: 6px;
  border-color: #efdfd4; */
}

footer {
  position: absolute;
  top: 898px;
  /* left: 864px; */
  height: 182px;
  width: 1920px;
  /* text-align: center; */
  padding: 37px 0px;
  /* background-color: purple; */
}

footer video {
  display: inline-block;
  height: 108px;
  width: 192px;
  margin: 0 10px;
  background-color: black;
}

footer video.selected {
  filter: brightness(50%);
}
</style>
