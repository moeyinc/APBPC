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
          <p class="lead-text font-hoefler-regular">
            You can send us your story via email.<br />
            Ask your parents to send your video to <span>info@albanypinebush.com</span>.
          </p>
          <ul class="notes">
            <li>
              Please keep your videos under three minutes.
            </li>
            <li>
              If the file size of your video is too big to send, you may use cloud services such as Google Drive or Dropbox.
            </li>
          </ul>
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
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

main .lead-text {
  list-style-type: disc;
  font-size: 40px;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 50px;
}

main .notes {
  list-style-type: disc;
  width: 50%;
  margin: 0 auto;
  font-size: 25px;
  text-align: left;
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
