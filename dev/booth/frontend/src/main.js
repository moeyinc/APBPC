// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import _store from './store'
import mixin from '@/mixins/global'
import VueSimpleSVG from 'vue-simple-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as faCircle2 } from '@fortawesome/free-regular-svg-icons'

library.add(faCircle, faCircle2)
Vue.component('font-awesome-icon', FontAwesomeIcon)
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
