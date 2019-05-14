// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Router from 'vue-router'
import routers from './router'

import Vuex from 'vuex'
import storeData from './store'

import Api from '@/api/request'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$api = Api

Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUi)

const router = new Router(routers)
const store = new Vuex.Store(storeData)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
