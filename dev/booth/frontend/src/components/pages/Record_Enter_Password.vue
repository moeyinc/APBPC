<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="true"
      :back-to="'recording-waiver'"
    />
    <header>
      <h2>RECORD YOUR OWN STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text" :style="{marginBottom: getMarginBottom}">
            Staff: Enter the 4-digit password below if the visitor has completed a waiver.
          </p>

        </div>
        <div class="numpad-container">
          <password-block
            class="numpad"
            :inputLen="passwordLen"
            :animation="anim"
            :border="'2px solid #efdfd4'"
            :border-radius="'15px'"
            :font="'bold 30px Arquitecta'"
            :regular-bg-color="'#0F0A02'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
            />
            <numeric-keypad
            class="numpad"
            :onInput="onInput"
            :border-radius="'15px'"
            :font="'bold 36px Arquitecta'"
            :regular-bg-color="'#47673b'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
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
import NumericKeypad from '@/components/reusables/NumKeypad'
import PasswordBlock from '@/components/reusables/PasswordBlock'

let data = require("../../data.json")

export default {
  name: 'recording-password',
  components: {
    SvgButton, TextButton, PageAside, NumericKeypad, PasswordBlock
  },
  data: () => ({
    password: "",
    passwordLen: 0,
    maxLength: 4,
    defaultPW: data.default,
    anim: ""
  }),
  methods: {
    onInput (key) {
      this.passwordFieldType = this.passwordFieldType === "password" ? "password" : ''
      this.password = (this.password + key).slice(0, this.maxLength)
      this.checkLength(this.password)
      this.checkMaxLength(this.password)
    },
    checkLength (value) {
      this.passwordLen = value.length
    },
    checkMaxLength (value) {
      if (value.length === this.maxLength) {
        if (value === this.defaultPW) {
          this.jumpTo('recording-topics', {dir: 'right'})
        } else {
          this.anim = "shake"
        }
        this.clearValue()
      }
    },
    clearValue () {
      setTimeout(() => {
        this.password = ""
        this.passwordLen = 0
        this.anim = ""
      }, 700)
    }
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
  beforeUnmount () {
    this.clearValue()
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
  top: 140px;
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

main .numpad-container {
  width: 100%;
  text-align: center;
}

main .numpad {
  display: inline-block;
  margin: 170px 120px;
  scale:1.3;
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
