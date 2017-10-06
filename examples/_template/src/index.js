import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// form表单 post请求的时候需要emulateJSON为true
// Vue.http.options.emulateJSON = true

new Vue({
  el: '#app',
  router,
  store, // inject store to all children

  render: (h) => h(App),
})
