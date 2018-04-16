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

      <div class="svg-wrapper" :style="getSvgWrapperStyle">
        <simple-svg
          class="simple-svg"
          :filepath="svgSrc"
          :fill="getTextColor"
          :stroke="getTextColor"
          :width="svgWidth"
          :height="svgHeight"
        />
      </div>

      <div class="label-wrapper" :style="getLabelWrapperStyle">
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
    hasLabel: Boolean,
    id: String,
    width: String,
    height: String,
    border: String,
    borderRadius: String,
    boxShadow: String,
    paddingTop: String,
    svgWrapperHeight: String,
    svgWidth: String,
    svgHeight: String,
    svgLabelGap: String,
    labelWrapperHeight: String,
    labelHeight: String,
    paddingBottom: String,
    svgSrc: String,
    font: String,
    lineHeight: String,
    letterSpacing: String,
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
        paddingTop: this.paddingTop,
        paddingBottom: this.paddingBottom,
        backgroundColor: this.getBgColor,
        textAlign: 'center'
      }
    },
    getSvgWrapperStyle () {
      return {
        height: this.svgWrapperHeight
      }
    },
    getLabelWrapperStyle () {
      return {
        height: this.labelWrapperHeight,
        marginTop: this.svgLabelGap
      }
    },
    getLabelStyle () {
      return {
        height: this.labelHeight,
        lineHeight: this.lineHeight,
        letterSpacing: this.letterSpacing,
        font: this.font,
        color: this.getTextColor
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
.svg-wrapper {
  display: table;
  width: 100%;
}

.svg-wrapper>.simple-svg {
  display: table-cell;
  vertical-align: middle;
}

.label-wrapper {
  display: table;
  width: 100%;
}

.label-wrapper>.button-label {
  display: table-cell;
  vertical-align: middle;
}
</style>
