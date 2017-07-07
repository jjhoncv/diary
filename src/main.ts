import Vue  from "vue"
import App from './app.component'
Vue.config.productionTip = false


import router from './router/index'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})