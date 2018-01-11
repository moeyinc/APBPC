<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="app" :style="{width: monitorWidth + 'px', height: monitorHeight + 'px'}">
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
      showNextView: false
    }
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
</style>
