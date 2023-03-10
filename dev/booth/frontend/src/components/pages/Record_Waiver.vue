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
      <h2>RECORD YOUR OWN STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text" :style="{marginBottom: getMarginBottom}">
            You must be 18+ years old to record your story. <br /> If you are under 18 years old, visit the front desk for a waiver and password.
          </p>
        </div>
        <div class="svg-button-container">
          <svg-button
            class="svg-button"
            :has-label="true"
            :width="'520px'"
            :height="'370px'"
            :padding-top="'130px'"
            :label-wrapper-height="'100px'"
            :padding-bottom="'40px'"
            :label-height="'100px'"
            :font="'bold 36px Arquitecta'"
            :line-height="'150px'"
            :letter-spacing="'3px'"
            :text-content="'I AM 18+ YEARS OLD'"
            :regular-bg-color="'#47673b'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
            :border-radius="'50px'"
            @clicked="setOver18('Over_18')"
           />
           <svg-button
             class="svg-button"
             :has-label="true"
             :width="'520px'"
             :height="'370px'"
             :padding-top="'100px'"
             :label-wrapper-height="'100px'"
             :padding-bottom="'40px'"
             :label-height="'100px'"
             :font="'bold 36px Arquitecta'"
             :line-height="'150px'"
             :letter-spacing="'3px'"
             :text-content="'I AM UNDER <BR /> 18 YEARS OLD <BR /> <BR />(PASSWORD REQUIRED)'"
             :regular-bg-color="'#47673b'"
             :regular-text-color="'#efdfd4'"
             :active-bg-color="'#efdfd4'"
             :active-text-color="'#47673b'"
             :border-radius="'50px'"
             @clicked="setUnder18('Waiver')"
            />
        </div>
      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
      <div class="container">
        <p class="font-hoefler-italic footer-text">
          Not recording a video today? Listen to other visitors' stories:
        </p>
        <text-button
          class="text-button"
          :width="'350px'"
          :height="'50px'"
          :border-radius="'15px'"
          :font="'bold 30px Arquitecta'"
          :letter-spacing="'3px'"
          :text-content="'VISITORS’ STORIES'"
          :regular-bg-color="'#47673b'"
          :regular-text-color="'#efdfd4'"
          :active-bg-color="'#efdfd4'"
          :active-text-color="'#47673b'"
          @clicked="jumpTo('listening-topics'), {dir: 'right'}"
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
import PageAside from '@/components/page-components/PageAside'

export default {
  name: 'record-waiver',
  components: {
    SvgButton, TextButton, PageAside
  },
  computed: {
    getMarginBottom () {
      if (this.getActiveTopicCount >= 7) {
        return '30px'
      } else if (this.getActiveTopicCount <= 6) {
        return '50px'
      }
    }
  },
  methods: {
    setOver18 (age) {
      this.$store.commit('setAge', {age: age})
      this.jumpTo('recording-topics', {dir: 'right'})
    },
    setUnder18 (age) {
      this.$store.commit('setAge', {age: age})
      this.jumpTo('recording-password', {dir: 'right'})
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
  top: 130px;
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
  padding-top: 3%;
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
  font-size: 30px;
  margin-right: 40px;
}

footer .text-button {
  display: inline-block;
}

</style>
