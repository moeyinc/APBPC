<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <header>
      <h1 class="font-hoefler-regular">People and the Pine Bush</h1>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text">
            Our community values the Pine Bush for many reasons. We encourage you to contribute your own story, or listen to the stories of others who enjoy the Pine Bush and what value it provides them.
          </p>
        </div>
        <div class="svg-button-container">
           <svg-button
             class="svg-button"
             :has-label="true"
             :width="'520px'"
             :height="'370px'"
             :padding-top="'40px'"
             :svg-wrapper-height="'180px'"
             :svg-label-gap="'10px'"
             :label-wrapper-height="'100px'"
             :padding-bottom="'40px'"
             :svg-width="'auto'"
             :svg-height="'120px'"
             :svg-src="require('@/assets/images/playback.svg')"
             :label-height="'100px'"
             :font="'bold 36px Arquitecta'"
             :line-height="'150px'"
             :letter-spacing="'3px'"
             :text-content="'LISTEN TO OTHER<br />VISITORS’ STORIES'"
             :regular-bg-color="'#47673b'"
             :regular-text-color="'#efdfd4'"
             :active-bg-color="'#efdfd4'"
             :active-text-color="'#47673b'"
             :border-radius="'50px'"
             @clicked="jumpTo('listening-topics', {dir: 'right'})"
            />
        </div>
      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
      <div class="container">
        <p class="font-hoefler-italic footer-text">
          Already have a recorded video?
        </p>
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
          @clicked="jumpTo('send-us-your-story'), {dir: 'right'}"
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
  name: 'home',
  components: {
    SvgButton, TextButton
  },
  created () {
    this.$store.commit('resetTopic')
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

header h1 {
  padding-top: 80px;
  font-size: 110px;
  text-align: center;
}

hr.top-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 230px;
  left: 200px;
  width: 1520px;
}

main {
  position: absolute;
  top: 230px;
  left: 200px;
  width: 1520px;
  height: 650px;
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

main .svg-button-container {
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
  left: 200px;
  width: 1520px;
}

footer {
  position: absolute;
  top: 880px;
  left: 200px;
  height: 200px;
  width: 1520px;
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
