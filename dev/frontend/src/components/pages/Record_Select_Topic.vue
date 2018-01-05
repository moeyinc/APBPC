<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <header>
      <div class="header-inner">
        <h2>RECORD YOUR OWN STORY</h2>
      </div>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text">
            Select from the topics below to record your own thoughts and opinions on the Pine Bush.
          </p>
        </div>

      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
      <div class="container">
        <text-button
          class="text-button"
          :width="'350px'"
          :height="'50px'"
          :border-radius="'15px'"
          :font="'bold 30px Arquitecta'"
          :letter-spacing="'3px'"
          :text-content="'SEND US AN EMAIL!'"
          :regular-bg-color="'#47673b'"
          :regular-text-color="'#efdfd4'"
          :active-bg-color="'#efdfd4'"
          :active-text-color="'#47673b'"
          @clicked=""
         />
      </div>
    </footer>
  </div>
</template>


<!-- =================================================
 Vue Script
================================================== -->
<script>
import SvgButton from '@/components/reusables/SvgButton'
import TextButton from '@/components/reusables/TextButton'
export default {
  name: 'record-select-topics',
  components: {
    SvgButton, TextButton
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
  left: 100px;
  width: 1720px;
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
  left: 100px;
  width: 1720px;
}

main {
  position: absolute;
  top: 135px;
  left: 100px;
  width: 1720px;
  height: 745px;
  /* background-color: brown; */
}

main div.main-inner {
  padding: 60px;
}

main p.lead-text {
  font-size: 40px;
  line-height: 1.3em;
  text-align: center;
}

main .svg-button-container {
  margin-top: 40px;
  width: 100%;
  text-align: center;
}

main .svg-button {
  display: inline-block;
  margin: 0 60px;
}

hr.bottom-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 880px;
  left: 100px;
  width: 1720px;
}

footer {
  position: absolute;
  top: 880px;
  left: 100px;
  height: 200px;
  width: 1720px;
  text-align: center;
  padding: 70px;
  /* background-color: purple; */
}

footer .container {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .footer-text {
  display: inline-block;
  font-size: 40px;
  margin-right: 40px;
}

footer .text-button {
  display: inline-block;
}

</style>
