<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="circular-visual-recording-timer" :id="id" :style="getWrapperStyle">
    <div class="label" :style="[getTextStyle, getLabelStyle]">
      {{ labelContent }}
    </div>
    <div class="time" :style="[getTextStyle, getTimeStyle]">
      {{ getTimeExpression }}
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import p5 from 'p5'
export default {
  name: 'circular-visual-recording-timer',
  props: {
    isRecording: Boolean,
    id: String,
    diameter: Number,
    outlineColor: String,
    indicatorColor: String,
    circleFillColor: String,
    textColor: String,
    outlineWidth: Number,
    maxTime: Number,
    labelContent: String,
    labelFont: String,
    labelTop: String,
    timeFont: String
  },
  data () {
    return {
      p5Instance: null,
      timer: null,
      passedTime: 0
    }
  },
  watch: {
    isRecording (val) {
      if (val === true) {
        this.timer = setInterval(() => {
          this.passedTime += 10
        }, 10)
      } else if (val === false) {
        this.passedTime = 0 // reset
        clearInterval(this.timer) // claear the timer
      }
    },
    passedTime (val) {
      if (val >= this.maxTime) {
        this.$emit('time-over') // emit an event to the parent component
        this.passedTime = 0 // reset
        clearInterval(this.timer) // claear the timer
      }
    }
  },
  mounted () {
    this.createP5Instance()
  },
  computed: {
    getWrapperStyle () {
      return {
        width: this.diameter + 'px',
        height: this.diameter + 'px'
      }
    },
    getTextStyle () {
      return {
        font: this.font,
        letterSpacing: this.letterSpacing,
        color: this.textColor
      }
    },
    getLabelStyle () {
      return {
        font: this.labelFont,
        top: this.labelTop
      }
    },
    getTimeStyle () {
      return {
        font: this.timeFont
      }
    },
    getTimeExpression () {
      // let milliseconds = parseInt((this.getRemainingTime % 1000) / 100)
      let seconds = Math.ceil((this.getRemainingTime / 1000) % 60)
      let minutes = parseInt((this.getRemainingTime / (1000 * 60)) % 60)
      // let hours = parseInt((this.getRemainingTime / (1000 * 60 * 60)) % 24)

      if (seconds === 60) {
        minutes++
        seconds = 0
      }

      // hours = (hours < 10) ? '0' + hours : hours
      // minutes = (minutes < 10) ? '0' + minutes : minutes
      seconds = (seconds < 10) ? '0' + seconds : seconds

      // return hours + ":" + minutes + ":" + seconds + "." + milliseconds
      return minutes + ':' + seconds
    },
    getRemainingTime () {
      return this.maxTime - this.passedTime
    }
  },
  methods: {
    createP5Instance () {
      const PROPS = this.$props
      const DATA = this.$data

      // p5 instance setup
      // *********************************************************************
      let sketch = function (P5) {
        // ============ setup () ============
        P5.setup = function () {
          console.log('p5 is setting up')

          // setup environment
          let canvasElement = P5.createCanvas(PROPS.diameter, PROPS.diameter)
          canvasElement.canvas.style.borderRadius = PROPS.diameter / 2 + 'px'
          P5.colorMode(P5.HSB, 360, 100, 100, 1.0)
        }

        // ============ draw () ============
        P5.draw = function () {
          let center = {
            x: PROPS.diameter / 2.0,
            y: PROPS.diameter / 2.0
          }

          P5.noStroke()

          // outline
          P5.fill(PROPS.outlineColor)
          P5.ellipse(center.x, center.y, PROPS.diameter, PROPS.diameter)

          // indicator arc
          let startAngle = -Math.PI / 2.0
          let stopAngle = startAngle + (DATA.passedTime / PROPS.maxTime) * (2 * Math.PI)
          P5.fill(PROPS.indicatorColor)
          let d = Math.abs(startAngle - stopAngle)
          if (PROPS.isRecording && d > 0.00001) {
            P5.arc(center.x, center.y, PROPS.diameter * 1.1, PROPS.diameter * 1.1, startAngle, stopAngle)
          }

          // inner circle fill
          P5.fill(PROPS.circleFillColor)
          P5.ellipse(center.x, center.y, PROPS.diameter - PROPS.outlineWidth, PROPS.diameter -  PROPS.outlineWidth)
        }
      }
      // *********************************************************************

      // append canvas tag under this component
      this.p5Instance = new p5(sketch, this.id)
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.circular-visual-recording-timer {
  position: relative;
}

.label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.time {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>
