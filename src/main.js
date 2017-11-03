import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//就是ie9和一些低版本的高级浏览器对es6新语法并不支持
import "babel-polyfill"
Vue.config.productionTip = false
Vue.use(ElementUI)
/*解决在其他组件中不能用*/
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
