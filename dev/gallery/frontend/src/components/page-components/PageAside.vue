<!-- =================================================
 Vue Template
================================================== -->
<template>
  <aside>
    <div class="home-button-wrapper">
      <svg-button
        :has-label="false"
        :width="'80px'"
        :height="'80px'"
        :svg-width="'80px'"
        :svg-height="'80px'"
        :svg-src="require('@/assets/images/home.svg')"
        :regular-bg-color="''"
        :regular-text-color="'#efdfd4'"
        :active-bg-color="''"
        :active-text-color="'#47673b'"
        @clicked="jumpTo('home', {dir: 'home'})"
       />
    </div>
    <div class="back-button-wrapper" v-if="hasBackButton">
      <svg-button
        :has-label="false"
        :width="'80px'"
        :height="'80px'"
        :svg-width="'80px'"
        :svg-height="'80px'"
        :svg-src="require('@/assets/images/back.svg')"
        :regular-bg-color="''"
        :regular-text-color="'#efdfd4'"
        :active-bg-color="''"
        :active-text-color="'#47673b'"
        @clicked="jumpTo(backTo, {dir: 'left'})"
       />
    </div>
  </aside>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import SvgButton from '@/components/reusables/SvgButton'
export default {
  name: 'page-aside',
  components: {
    SvgButton
  },
  props: {
    hasBackButton: Boolean,
    backTo: String
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
aside {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 120px;
  padding: 20px;
}

aside .home-button-wrapper {
}

aside .back-button-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
