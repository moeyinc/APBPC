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
          </div>
          <div class="controller-wrapper">

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
import TextButton from '@/components/reusables/TextButton'
export default {
  name: 'record-record-story',
  components: {
    PageAside, TextButton
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
  height: 513px;
}

main .video-wrapper {
  display: inline-block;
  width: 912px;
  height: 513px;
  background-color: green;
}

main .controller-wrapper {
  display: inline-block;
  width: 504px;
  height: 100%;
  background-color: orange;
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
