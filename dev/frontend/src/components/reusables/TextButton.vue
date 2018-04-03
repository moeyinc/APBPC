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
      <div
        v-if="textTitle"
        class="title-wrapper"
        :style="{height: titleHeight, marginBottom: titleMarginBottom}">
        <h2
          class="button-title"
          :style="getTitleStyle">
          {{ textTitle.toUpperCase() }}
        </h2>
      </div>

      <div
        class="body-wrapper"
        :style="{height: bodyHeight}">
        <p
          class="button-label"
          :style="getLabelStyle"
          v-html="textContent">
        </p>
      </div>
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
    padding: String,
    font: String,
    lineHeight: String,
    letterSpacing: String,
    textAlign: String,
    textTitle: String,
    textContent: String,
    regularBgColor: String,
    regularTextColor: String,
    activeBgColor: String,
    activeTextColor: String,
    titleLineHeight: String,
    titleLetterSpacing: String,
    titleFont: String,
    titleTextAlign: String,
    titleFontWeight: String,
    titleHeight: String,
    bodyHeight: {
      type: String,
      default: '100%'
    },
    titleMarginBottom: String
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
        padding: this.padding,
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
    getTitleStyle () {
      return {
        lineHeight: this.titleLineHeight,
        letterSpacing: this.titleLetterSpacing,
        font: this.titleFont,
        color: this.getTextColor,
        textAlign: this.titleTextAlign,
        fontWeight: this.titleFontWeight
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
  height: 100%;
  position: relative;
}

.title-wrapper {
  display: table;
  width: 100%;
}

.button-title {
  display: table-cell;
  vertical-align: middle;
}

.body-wrapper {
  display: table;
  width: 100%;
}

.button-label {
  display: table-cell;
  vertical-align: middle;
}
</style>
