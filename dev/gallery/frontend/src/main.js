// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import _store from './store'
import mixin from '@/mixins/global'
import VueSimpleSVG from 'vue-simple-svg'

Vue.use(Vuex)
Vue.mixin(mixin)
Vue.use(VueSimpleSVG)
const store = new Vuex.Store(_store)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
