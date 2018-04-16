<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="false"
    />
    <header>
      <h2>RECORD YOUR OWN STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div class="thank-you-wrapper">
          <p class="thank-you">
            Thank you for telling us your story!
          </p>
          <div class="video-area">
            <div class="video-wrapper">
              <video
                controls
                autoplay
                id="your-video"
                :src="$store.state.uploadedFileURL"
                @click="playStopVideo()"
                />
            </div>
          </div>
          <p class="note">
            Your video will be published to other visitors after our staffs check the content.
          </p>
        </div>
      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
      <text-button
        class="text-button"
        :width="'350px'"
        :height="'50px'"
        :border-radius="'15px'"
        :font="'bold 30px Arquitecta'"
        :letter-spacing="'3px'"
        :text-content="'BACK TO HOME'"
        :regular-bg-color="'#47673b'"
        :regular-text-color="'#efdfd4'"
        :active-bg-color="'#efdfd4'"
        :active-text-color="'#47673b'"
        @clicked="jumpTo('home', {dir: 'home'})"
       />
    </footer>
  </div>
</template>


<!-- =================================================
 Vue Script
================================================== -->
<script>
import PageAside from '@/components/page-components/PageAside'
import TextButton from '@/components/reusables/TextButton'
export default {
  name: 'record-finished-recording',
  components: {
    PageAside, TextButton
  },
  data () {
    return {
      isPlaying: true,
      videoElement: null
    }
  },
  mounted () {
    this.videoElement = this.$el.querySelector('#your-video')
  },
  methods: {
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
  height: 825px;
  /* background-color: brown; */
  text-align: center;
}

main .thank-you-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

main .thank-you {
  font-family: 'HoeflerText Regular';
  font-size: 50px;
  margin-bottom: 50px;
}

main .video-area {
  width: 100%;
  margin-bottom: 50px;
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

main p.note {
  font-size: 30px;
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
  top: 960px;
  left: 200px;
  height: 120px;
  width: 1520px;
  text-align: center;
  padding: 35px;
  /* background-color: purple; */
}

footer .text-button {
  display: inline-block;
}

</style>
