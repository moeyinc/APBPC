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
        <div>
          <h5 class="selected-topic">- SELECTED TOPIC -</h5>
          <p class="question-text">
            {{ $store.state.selectedTopic }}
          </p>
        </div>
      </div>
    </main>
    <footer>
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
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style>
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
