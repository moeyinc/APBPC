<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="video-container-wrapper">
    <div
      class="video-container"
      :style="{left: videoContainerLeft + 'px', padding: videoContainerPadding}"
      @mousedown="startDragging($event)"
      @mousemove="drag($event)"
      @mouseup="stopDragging($event)"
      @mouseleave="stopDragging($event)">
      <video
        v-for="(item, index) in videoURLs"
        :key="index"
        preload="metadata"
        :src="item"
        :style="[getVideoSize, getSelectedStyle(item)]"
        @mouseup="clicked($event, item)"
        />
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'horizontal-scroll-video-gallery',
  props: {
    videoURLs: Array,
    selectedVideoURL: String,
    videoWidth: Number,
    videoHeight: Number,
    videoMargin: Number,
    videoContainerPadding: String,
    initialVideoContainerLeft: Number,
    selectedStyle: Object
  },
  data () {
    return {
      isDragging: false,
      startDraggingPosX: 0,
      startDraggingAbsPosX: 0,
      videoContainerLeft: 0
    }
  },
  created () {
    this.videoContainerLeft = this.initialVideoContainerLeft
  },
  computed: {
    getVideoSize () {
      return {
        width: this.videoWidth + 'px',
        height: this.videoHeight + 'px',
        margin: '0 ' + this.videoMargin + 'px'
      }
    },
    videoContainerWidth () {
      return this.videoURLs.length * (this.videoWidth + this.videoMargin)
    }
  },
  methods: {
    getSelectedStyle (item) {
      if (item === this.selectedVideoURL) {
        return this.selectedStyle
      }
    },
    startDragging (e) {
      // start dragging only if it is needed
      if (this.initialVideoContainerLeft + this.videoContainerWidth > this.$el.offsetWidth) {
        this.isDragging = true
        this.startDraggingPosX = e.pageX - this.videoContainerLeft
      }
      this.startDraggingAbsPosX = e.clientX
    },
    stopDragging (e) {
      this.isDragging = false
    },
    drag (e) {
      if (this.isDragging) {
        let newPos = e.pageX - this.startDraggingPosX

        // if new position is beyond the edges
        const leftEdge = this.$el.offsetWidth - this.videoContainerWidth - this.initialVideoContainerLeft - this.initialVideoContainerLeft
        const rightEdge = 0 + this.initialVideoContainerLeft
        if (newPos < leftEdge) {
          newPos = leftEdge
        } else if (newPos > rightEdge) {
          newPos = rightEdge
        }

        // set the new position
        this.videoContainerLeft = newPos
      }
    },
    clicked (e, item) {
      // if you are dragging, ignore clicking
      let draggedDistance = Math.abs(this.startDraggingAbsPosX - e.clientX)
      if (draggedDistance > 10) {
        console.log('you are dragging')
        return
      }
      this.$emit('clicked', item)
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.video-container-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-container {
  position: absolute;
  height: 100%;
  white-space: nowrap;
}

video {
  display: inline-block;
  /* height: 108px;
  width: 192px;
  margin: 0 10px; */
  background-color: black;
}
</style>
