<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="true"
      :back-to="'home'"
    />
    <header>
      <h2>SEND US YOUR STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text">
            You can send us your story via email. Ask your parents to send your video to info@albanypinebush.com.
          </p>
          <p>
            Please keep your videos under three minutes.
          </p>
          <p>
            If the file size of your video is too big to send, you may use cloud services such as Google Drive or Dropbox.
          </p>
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
  name: 'record-select-topics',
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

main p.lead-text {
  font-size: 40px;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 50px;
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
