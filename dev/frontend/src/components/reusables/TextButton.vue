<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    :id="id"
    :style="getButtonStyle"
    @mousedown="toggle"
    @mouseup="toggle"
    @mouseleave="resetClick"
    @click="clicked()">

    <div class="inner">
      <p
        class="button-label"
        :style="getLabelStyle"
        v-html="textContent">
      </p>
    </div>

  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'svg-button',
  props: {
    id: String,
    width: String,
    height: String,
    border: String,
    borderRadius: String,
    boxShadow: String,
    font: String,
    lineHeight: String,
    letterSpacing: String,
    textAlign: String,
    textContent: String,
    regularBgColor: String,
    regularTextColor: String,
    activeBgColor: String,
    activeTextColor: String
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    getButtonStyle () {
      return {
        width: this.width,
        height: this.height,
        border: this.border,
        borderRadius: this.borderRadius,
        boxShadow: this.boxShadow,
        backgroundColor: this.getBgColor,
        textAlign: 'center'
      }
    },
    getLabelStyle () {
      return {
        lineHeight: this.lineHeight,
        letterSpacing: this.letterSpacing,
        font: this.font,
        color: this.getTextColor,
        textAlign: this.textAlign
      }
    },
    getBgColor () {
      return this.isActive ? this.activeBgColor : this.regularBgColor
    },
    getTextColor () {
      return this.isActive ? this.activeTextColor : this.regularTextColor
    }
  },
  methods: {
    // switch the active value to change the background color
    toggle () {
      this.isActive = !this.isActive
    },
    // reset the active value when leaving your mouse
    resetClick () {
      this.isActive = false
    },
    // emit an event to the parent
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.inner {
  display: table;
  width: 100%;
  height: 100%;
}

.button-label {
  display: table-cell;
  vertical-align: middle;
}
</style>
