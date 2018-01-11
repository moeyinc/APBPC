<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <transition :name="transitionName"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    >
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
    console.log(dir)
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
  },
  methods: {
    beforeEnter () {
      console.log('----------------')
      console.log('on before enter')
    },
    enter () {
      console.log('on enter')
    },
    afterEnter () {
      console.log('on after enter')
    },
    enterCancelled () {
      console.log('on enter cancelled')
    },
    beforeLeave () {
      console.log('on before leave')
    },
    leave () {
      console.log('on leave')
    },
    afterLeave () {
      console.log('on after leave')
    },
    leaveCancelled () {
      console.log('on leave cancelled')
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
