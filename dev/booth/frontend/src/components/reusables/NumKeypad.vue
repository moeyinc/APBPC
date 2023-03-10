<template>
  <div :class="'keypad-dialog'" >
    <div class="keypad-container" >
      <template v-for="n in 10">
        <div
        class="keypad-flex  keypad-class"
        >
          <div
          :key="n"
            class="keypad"
            :ripple="true"
          >
          <div v-if="n < 11" class="keypad-center">
            <text-button
              class="text-button"
              :width="'70px'"
              :height="'70px'"
              :border-radius="'15px'"
              :font="'bold 36px Arquitecta'"
              :letter-spacing="'3px'"
              :text-content="getNum(n)"
              :regular-bg-color="'#47673b'"
              :regular-text-color="'#efdfd4'"
              :active-bg-color="'#efdfd4'"
              :active-text-color="'#47673b'"
              @clicked="clicked(n)"
            />
          </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import TextButton from '@/components/reusables/TextButton'

export default {
  name: "numeric-keypad",
  data () {
    return {
      isActive: false,
      n: 0
    }
  },
  components: {
    TextButton
  },
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
    activeBgColor: String,
    activeTextColor: String,
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
    clicked (n) {
      this.$emit('clicked')
      if (n < 10) {
        this.onInput(n)
      } else if (n === 10) {
        this.onInput(0)
      }
    },
    getNum (n) {
      if (n < 10) {
        return n
      } else if (n === 10) {
        return 0
      }
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
  transform: translateY(-25%);
}

</style>
