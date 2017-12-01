/*!
 * vue-bluer
 * (c) 2017 chen peng
 * Released under the MIT License.
 */
// import Bar from './bar'
// import Button from './button'
// import Switch from './switch'
// import Actionsheet from './actionsheet'
// import TabContainer from './tab-container'
// import TabContainerItem from './tab-container-item'
// import Popup from './popup'
// import Picker from './picker/picker'
// import DatetimePicker from './datetime-picker'
// import Slide from './slide'
import Swipeout from './swipeout/swipeout'
import SwipeoutItem from './swipeout/swipeout-item'
import SwipeoutButton from './swipeout/swipeout-button'
import tabContainer from './tab-container/index'
import tabContainerItem from './tab-container-item'

import Toast from './toast'
import Modal from './modal/modal'
import ModalJs from './modal'
import Navbar from './navbar'
import TabItem from './tab-item'
import Cell from './cell'
import scrollRecord from './route-data/scroll-record'
const install = function(Vue) {
  if (install.installed) return;
  // bl-switch
  Vue.component('blSwitch', resolve => {
    require(['./switch'], resolve)
  });// bl-bar
  Vue.component('blBar', resolve => {
    require(['./bar'], resolve)
  });
  // bl-button
  Vue.component('blButton', resolve => {
    require(['./button'], resolve)
  });
  // bl-actionsheet
  Vue.component('blActionsheet', resolve => {
    require(['./actionsheet'], resolve)
  });
  // bl-popup
  Vue.component('blPopup', resolve => {
    require(['./popup'], resolve)
  });
  // bl-slide
  Vue.component('blSlide', resolve => {
    require(['./slide'], resolve)
  });
  // bl-picker
  Vue.component('blPicker', resolve => {
    require(['./picker/picker'], resolve)
  });
  // bl-datetime-picker
  Vue.component('blDatetimePicker', resolve => {
    require(['./datetime-picker'], resolve)
  });
  // bl-address-picker
  Vue.component('blAddressPicker', resolve => {
    require(['./address-picker'], resolve)
  });
  // bl-select-picker
  Vue.component('blSelectPicker', resolve => {
    require(['./select-picker'], resolve)
  });
  // bl-upload
  Vue.component('blUpload', resolve => {
    require(['src/components/iBailianApp/comment/comment-upload'], resolve)
  });
  // bl-comment
  Vue.component('blComment', resolve => {
    require(['src/components/iBailianApp/comment/comment-textarea'], resolve)
  });
  // bl-slide-bar
  Vue.component('blSlideBar', resolve => {
    require(['src/components/iBailianApp/slideBar/bl-slide-bar'], resolve)
  });
  // bl-popselect
  Vue.component('blPopselect', resolve => {
    require(['src/components/iBailianApp/popSelect/popSelect'], resolve)
  });
  // bl-calendar
  Vue.component('blCalendar', resolve => {
    require(['src/components/iBailianApp/calendar/calendar'], resolve)
  });

  /* 充值缴费字母表组件 */
  // bl-sort-listView
  Vue.component('blSortListView', resolve => {
    require(['src/components/iBailianApp/sortListView/sortList'], resolve)
  });
  /* 神马 拖拽滑动验证 */
  // bl-drag-val-bar
  Vue.component('blDragValBar', resolve => {
    require(['src/components/iBailianApp/dragValBar/validate'], resolve)
  });
  /* 神马 模拟安卓九宫格解锁验证 */
  // bl-unlock
  Vue.component('blUnlock', resolve => {
    require(['src/components/iBailianApp/unlock/validate'], resolve)
  });
  // bl-home-menu
  Vue.component('blHomeMenu', resolve => {
    require(['src/views/recharge/_home'], resolve)
  });

  /* 签到日历组件 */
  // bl-sign-calendar
  Vue.component('blSignCalendar', resolve => {
    require(['src/views/sign/calendar/calendar'], resolve)
  });

  /* 礼品卡组件 */
  // bl-shop-card
  Vue.component('blShopCard', resolve => {
    require(['src/components/iBailianApp/shopCard'], resolve)
  });
  // bl-ele-card
  Vue.component('blEleCard', resolve => {
    require(['src/views/giftcard/_eleCard'], resolve)
  });
  // bl-card-list
  Vue.component('blCardList', resolve => {
    require(['src/views/giftcard/_cardList'], resolve)
  });
  // 神马 猜你喜欢商品列表组件
  // bl-card-list
  Vue.component('blGuessGoodsList', resolve => {
    require(['src/components/iBailianApp/likeGoodsList/_likeGoodsList'], resolve)
  });

  /* 微信H5组件 */
  // bl-app-download
  Vue.component('blAppDownload', resolve => {
    require(['src/components/H5Components/appDownload/appDownload'], resolve)
  });
  Vue.component('bl' + tabContainer.name, tabContainer);
  Vue.component('bl' + tabContainerItem.name, tabContainerItem);
  Vue.component('bl' + Cell.name, Cell);
  Vue.component('bl' + Navbar.name, Navbar);
  Vue.component('bl' + TabItem.name, TabItem);
  Vue.component('bl' + Modal.name, Modal);
  Vue.component('bl' + Swipeout.name, Swipeout);
  Vue.component('bl' + SwipeoutItem.name, SwipeoutItem);
  Vue.component('bl' + SwipeoutButton.name, SwipeoutButton);
  // // bl-swipeout
  // Vue.component('blSwipeout', resolve => {
  //   require(['./swipeout/swipeout'], resolve)
  // });
  // // bl-swipeout-item
  // Vue.component('blSwipeoutItem', resolve => {
  //   require(['./swipeout/swipeout-item'], resolve)
  // });
  // // bl-swipeout-button
  // Vue.component('blSwipeoutButton', resolve => {
  //   require(['./swipeout/swipeout-button'], resolve)
  // });

  window.$toast = Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$modal = Vue.prototype.$modal = ModalJs;

  Vue.directive('scroll-record', scrollRecord)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default install
