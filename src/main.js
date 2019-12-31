import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import vuex from 'vuex'
import { routes } from './routes'
import vueaxios from 'vue-axios'
Vue.use(VueRouter);
Vue.use(vuex);
new vuex.Store({
  
})

const router = new VueRouter({
    routes,
    mode:'history'
})


Vue.use(vueaxios,axios)
// Vue.prototype.axios=axios;

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})



