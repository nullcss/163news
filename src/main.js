import Vue from 'vue'
import App from './App'
import router from './router/permission.js'
import store from './store'

/* 工具 */
import './utils/rem.js'
import './utils/iconfont.js'

/* 样式 */
import './styles/index.less'
// import './styles/theme.less'

/* 指令 */
import './directive'

/* 全局引入less */
require('!style-loader!css-loader!less-loader!./styles/theme.less')

Vue.config.productionTip = false

/* 全局组件 */
import customComponents from './custom-components.js'
Vue.use(customComponents)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' 
Vue.use(VueAwesomeSwiper)

// 返回
Vue.prototype.back = (route) => {
  route.animate = 2
  history.go(-1)
}

// 跳转文章页
Vue.prototype.skip = (route, id) => {
  route.push('/article/'+id)
}

import { Cookie } from 'utils/storage'
Vue.prototype.Cookie = Cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
