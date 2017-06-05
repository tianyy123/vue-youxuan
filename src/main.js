import Vue from 'vue'
import App from './App.vue'

import router from "./router/router"

import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)

import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import store from "./store/store"






new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
