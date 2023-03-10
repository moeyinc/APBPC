<template>
  <div :class="'passwordblock-container' + animation">
    <template>
      <header>
        <h3> - PASSWORD - </h3>
      </header>
      <div class="passwordblock" :style="getButtonStyle">
        <font-awesome-icon v-if="inputLen >= 1" class="pwIcon" icon="fa-solid fa-circle" />
        <font-awesome-icon v-if="inputLen < 1" class="pwIcon" icon="fa-regular fa-circle" />
        <font-awesome-icon v-if="inputLen >= 2" class="pwIcon" icon="fa-solid fa-circle" />
        <font-awesome-icon v-if="inputLen < 2" class="pwIcon" icon="fa-regular fa-circle" />
        <font-awesome-icon v-if="inputLen >= 3" class="pwIcon" icon="fa-solid fa-circle" />
        <font-awesome-icon v-if="inputLen < 3" class="pwIcon" icon="fa-regular fa-circle" />
        <font-awesome-icon v-if="inputLen >= 4" class="pwIcon" icon="fa-solid fa-circle" />
        <font-awesome-icon v-if="inputLen < 4" class="pwIcon" icon="fa-regular fa-circle" />
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: "password-block",
  data: () => ({
    iconInactive: "fa-regular fa-circle",
    iconActive: "fa-solid fa-circle"
  }),
  props: {
    inputLen: { type: Number, required: true },
    animation: { type: String, required: true },
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
        width: '430px',
        height: '90px',
        border: this.border,
        borderRadius: this.borderRadius,
        boxShadow: this.boxShadow,
        padding: this.padding,
        backgroundColor: this.getBgColor,
        textAlign: 'center'
      }
    },
    getBgColor () {
      return this.isActive ? this.activeBgColor : this.regularBgColor
    },
    getIconStyle () {
      return this.inputLen >= 1 ? this.iconActive : this.iconInactive
    }
  }
}
</script>

<style>
header h3 {
  padding-bottom: 3%;
  font: bold 23px Arquitecta;
  letter-spacing: 3px;
}

.passwordblock-container {
  display: inline-block;
}

.passwordblock-containershake {
  display: inline-block;
  animation: shake 0.5s;
}

.passwordblock {
  padding-top: 8%;
  text-align: center;
  vertical-align: center;
  margin: 0 auto;

}

.pwIcon {
  width: 19%;
}

.shake {
  animation: shake 0.5s infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {

  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(1em);
  }
  40% {
    transform: translate(-1em);
  }
  60% {
    transform: translate(1em);
  }
  80% {
    transform: translate(-1em);
  }
  100% {
    transform: translate(0);
  }
}
</style>
