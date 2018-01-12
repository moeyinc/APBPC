<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'parent',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let dir = to.params.dir
    switch (dir) {
      case 'left':
        this.transitionName = 'slide-right'
        break
      case 'right':
        this.transitionName = 'slide-left'
        break
      case 'home':
        this.transitionName = 'fade'
        break
      default:
        this.transitionName = 'slide-left'
    }
    next()
  },
  computed: {
    getTransitionName () {
      return 'slide-left'
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


/* from evan you */
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}



</style>
