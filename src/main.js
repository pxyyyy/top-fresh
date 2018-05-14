// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index';

//有赞
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/vant-css/index.css';

//VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//VueVideoPlayer
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Bridge from '../config/bridge.js'
Vue.prototype.$bridge = Bridge
//use custom
Vue.use(Vant);

Vue.use(VueAwesomeSwiper)
Vue.use(Lazyload);
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
