<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    id="app"
    :style="{width: monitorWidth + 'px', height: monitorHeight + 'px'}"
    @click="[displayRipple($event), resetAppTimer()]"
    @mousemove="resetAppTimer()"
    >
    <router-view />
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
require('reset-css')
export default {
  name: 'app',
  data () {
    return {
      monitorWidth: 1920,
      monitorHeight: 1080,
      showNextView: false,
      appTimer: null
    }
  },
  created () {
    // reset the app timer
    this.resetAppTimer()
  },
  mounted () {
    this.resize()

    // set an event listener for resizing
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    // remove the event listener
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      // calc how much the content should be zoomed
      let zoom

      let ratioW = window.innerWidth / this.monitorWidth
      let ratioH = window.innerHeight / this.monitorHeight
      ratioW < ratioH ? zoom = ratioW : zoom = ratioH

      // zoom it
      const el = document.getElementById('app')
      el.style.zoom = zoom
    },
    // display ripple effect at mouse-clicked position
    displayRipple (event) {
      // remove old repple element
      const oldRippleElement = document.getElementById('ripple')
      if (oldRippleElement) {
        oldRippleElement.parentNode.removeChild(oldRippleElement)
      }
      console.log('displaying ripple')

      // calc ripple position
      const rippleRadius = 15
      let posX = event.clientX - rippleRadius
      let posY = event.clientY - rippleRadius

      // create new ripple element
      const newRippleElement = document.createElement('span')
      newRippleElement.id           = 'ripple'
      newRippleElement.style.width  = (rippleRadius * 2) + 'px'
      newRippleElement.style.height = (rippleRadius * 2) + 'px'
      newRippleElement.style.left   = posX + 'px'
      newRippleElement.style.top    = posY + 'px'

      const appElement = document.getElementById('app')
      appElement.appendChild(newRippleElement)

      newRippleElement.classList.add('rippleEffect')
    },
    resetAppTimer () {
      clearTimeout(this.appTimer)
      this.appTimer = setTimeout(() => {
        console.log('Timeout: 10 mins passed. Returning to Home screen.')
        this.jumpTo('home', {dir: 'home'})
      }, 1000 * 60 * 10) // 10 mins
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style>
/*-------- for touch screens --------*/
html {
  /*cursor: none;*/
  user-select: none;
}

a {
  /*cursor: none;*/
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

/*-------- fonts --------*/
@font-face {
  font-family: "HoeflerText Regular";
  src: url("assets/fonts/HoeflerText-Regular.ttf");
}

@font-face {
  font-family: "HoeflerText Black";
  src: url("assets/fonts/HoeflerText-Black.ttf");
}

@font-face {
  font-family: "HoeflerText Black Italic";
  src: url("assets/fonts/HoeflerText-BlackItalic.ttf");
}

@font-face {
  font-family: "HoeflerText Italic";
  src: url("assets/fonts/HoeflerText-Italic.ttf");
}

@font-face {
  font-family: "Arquitecta";
  src: url("assets/fonts/Arquitecta.otf");
}

@font-face {
  font-family: "Arquitecta Black";
  src: url("assets/fonts/ArquitectaBlack.otf");
}

@font-face {
  font-family: "Arquitecta Heavy";
  src: url("assets/fonts/ArquitectaHeavy.otf");
}

/*-------- common styles --------*/
html, body, #app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  overflow: hidden;
  background-image: url("assets/images/background.png");
  color: #efdfd4;
  font-family: "Arquitecta";
}

*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
         -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
}

.font-hoefler-regular {
  font-family: "HoeflerText Regular";
}

.font-hoefler-italic {
  font-family: "HoeflerText Italic";
}

hr {
  -webkit-margin-before: 0.0em;
  -webkit-margin-after: 0.0em;
}

.page-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

#ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  transform: scale(0);
  position: absolute;
  opacity: 1;
  z-index: 2000;
}
.rippleEffect {
    animation: rippleDrop .3s linear;
}

@keyframes rippleDrop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
