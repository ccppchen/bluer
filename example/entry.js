import Vue from 'vue';
import App from './app';
import routes from './route';
import { install as Mint } from 'src/index';
import VueRouter from 'vue-router';

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(Mint);
Vue.use(VueRouter);

let h5BaseUrl = ''; // 微信h5的基础url
let h5PaymentUrl = ''; // 微信h5收银台url
let h5PayForApp = ''; // 微信h5普通收银台
switch (location.host) {
  case 'mh5.st.bl.com': // 测试环境
  case 'localhost:8088': // 测试环境
    h5BaseUrl = 'https://m.st.bl.com/h5-web';
    h5PaymentUrl = 'http://zf.st.bl.com/payment/payForTaoli.html';
    h5PayForApp = 'http://zf.st.bl.com/payment/payForApp.html'
    break;
  case 'mh5.ut.bl.com': // pre环境
    h5BaseUrl = 'https://m.ut.bl.com/h5-web';
    h5PaymentUrl = 'https://payment.ut.bl.com/payment/payForTaoli.html';
    h5PayForApp = 'https://payment.ut.bl.com/payment/payForApp.html'
    break;
  default:
    h5BaseUrl = 'https://m.bl.com/h5-web'; // 生产环境
    h5PaymentUrl = 'https://payment.bl.com/payment/payForTaoli.html';
    h5PayForApp = 'https://payment.bl.com/payment/payForApp.html'
}
console.log(h5PaymentUrl)
Vue.$h5VueBaseUrl = Vue.prototype.$h5VueBaseUrl = location.origin + "/h5.html#" // Vue h5基础url

Vue.$h5BaseUrl = Vue.prototype.$h5BaseUrl = h5BaseUrl // 微信h5的基础url
Vue.$h5PaymentUrl = Vue.prototype.$h5PaymentUrl = h5PaymentUrl // 微信h5讨礼收银台url
Vue.$h5PayForApp = Vue.prototype.$h5PayForApp = h5PayForApp // 微信h5普通收银台url

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
