<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="record-instruction-dialog floating">
    <div class="arrow-wrapper">
      <simple-svg
        class="arrow"
        :filepath="require('@/assets/images/ARROW.svg')"
        :fill="'orange'"
        :stroke="'orange'"
        :width="'50px'"
        :height="'50px'"
      />
    </div>
    <div class="dialog-body" @click.stop="$emit('clicked')">
      <p>
        PLEASE LOOK AND SPEAK TO THE CAMERA ABOVE!
      </p>
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'RecordInstructionDialog'
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.record-instruction-dialog {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 500px;
  height: 250px;
}

.arrow {
  height: 50px;
}

.arrow-wrapper {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
}

.dialog-body {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 200px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  display: table;
  padding: 20px;
}

.dialog-body p {
  letter-spacing: 2px;
  color: white;
  font-size: 42px;
  font-weight: bold;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.floating {
	animation-name: floating;
	-webkit-animation-name: floating;

	animation-duration: 1.5s;
	-webkit-animation-duration: 1.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes floating {
	0% {
		transform: translate(-50%, 0%);
	}
	50% {
		transform: translate(-50%, 8%);
	}
	100% {
		transform: translate(-50%, 0%);
	}
}

@-webkit-keyframes floating {
	0% {
		-webkit-transform: translate(-50%, 0%);
	}
	50% {
		-webkit-transform: translate(-50%, 8%);
	}
	100% {
		-webkit-transform: translate(-50%, 0%);
	}
}

</style>
