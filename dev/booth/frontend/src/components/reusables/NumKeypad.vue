<template>
  <div :class="'keypad-dialog'" >
    <div class="keypad-container" >
      <template v-for="n in 10" >
        <div
        class="keypad-flex  keypad-class"
        >
          <div
          :key="n"
            class="keypad"
            :ripple="true"
          >
            <div v-if="n < 10" class="keypad-center" :style="getButtonStyle" @click="onInput(n)" >{{ n }}</div>
            <div v-if="n == 10" class="keypad-center" :style="getButtonStyle"  @click="onInput(0)">0</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "numeric-keypad",
  data: () => ({
    n: 0
  }),
  props: {
    keypadClass: { type: String, default: "keypad-class", required: false },
    onInput: { type: Function, required: true },
    width: String,
    height: String,
    border: String,
    borderRadius: String,
    padding: String,
    font: String,
    lineHeight: String,
    letterSpacing: String,
    regularBgColor: String,
    regularTextColor: String,
    bodyHeight: {
      type: String,
      default: '100%'
    },
    titleMarginBottom: String
  },
  computed: {
    getButtonStyle () {
      return {
        width: '70px',
        height: '70px',
        font: this.font,
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
  }
}
</script>

<style>

.keypad-class {
  padding:1%;
}

.keypad-dialog {
  width:30%;
}

.keypad-container {
  display: flex;
  flex: 1 1 auto;
  flex-wrap:wrap;
  flex-direction: row;
}

.keypad-flex {
  flex-basis: 17%;
  flex-grow: 0;
  max-width: 33%;
  min-height: 4rem;
}

.keypad {
  text-align: center;
  vertical-align: center;
  margin: 0 auto;
}

.keypad-center {
  transform: translateY(-50%);
  padding: 20%;
  text-align: center;
  vertical-align: center;
}


</style>
