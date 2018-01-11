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
          <p class="question-text">
            {{ $store.state.selectedTopic }}
          </p>
        </div>
        <div class="video-area">
          <div class="video-wrapper">
            <video
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
    <footer>
      <video
        v-for="(item, index) in videoURLs"
        :key="index"
        :src="item"
        :class="{selected: (item === selectedVideoURL) ? true : false}"
        @click="switchVideo(item)"
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
      videoElement: null,
      videoURLs: [],
      selectedVideoURL: null,
      isPlaying: false
    }
  },
  created () {
    this.$store.dispatch('getVideos')
    .then((data) => {
      console.log('I got res!!', data)
      this.videoURLs = data.fileURLs
      this.selectedVideoURL = this.videoURLs[0]
    })
  },
  mounted () {
    this.videoElement = document.getElementById('watching-video')
  },
  methods: {
    switchVideo (item) {
      this.selectedVideoURL = item
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

/* main div.main-inner {
  padding: 50px;
} */

main .selected-topic-wrapper {
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

main .video-area {
  position: absolute;
  top: 250px;
  width: 100%;
  height: 513px;
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
  left: 0px;
  height: 182px;
  width: 1920px;
  text-align: center;
  padding: 37px 0px;
  /* background-color: purple; */
}

footer video {
  display: inline-block;
  height: 108px;
  width: 192px;
  margin: 0 10px;
}

footer video.selected {
  filter: brightness(40%);
}
</style>
