import Actionsheet from '../packages/actionsheet';
import Bar from '../packages/bar';
import Button from '../packages/button';
import Cell from '../packages/cell';
import DatetimePicker from '../packages/datetime-picker';
import Modal from '../packages/modal';
import Toast from '../packages/toast';
import Navbar from '../packages/navbar';
import SelectPicker from '../packages/select-picker';
import TabItem from '../packages/tab-item';
import TabContainer from '../packages/tab-container';
import TabContainerItem from '../packages/tab-container-item';
import Popup from '../packages/popup';
import Picker from '../packages/picker';
import Switch from '../packages/switch';
import Swipeout from '../packages/swipeout';
import SwipeoutItem from '../packages/swipeout-item';
import SwipeoutButton from '../packages/swipeout-button';
import Slide from '../packages/slide';
import directive from './directive';
import ModalJs from '../packages/modal/modal.js';
import Toast from '../packages/toast/toast.js';
import infiniteScroll from '../packages/infinite-scroll/index.js';
import './sass/comm.scss';

const version = '2.2.9';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  // bl-address-picker
  Vue.component('blAddressPicker', resolve => {
    require(['../packages/address-picker'], resolve)
  });

  // 指令 注册
  Object.keys(directive).forEach((key) => {
    Vue.directive(key, directive[key])
  })

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$modal = Vue.prototype.$modal = ModalJs;
  Vue.use(infiniteScroll);

  Vue.component("bl"+Actionsheet.name, Actionsheet);
  Vue.component("bl"+Bar.name, Bar);
  Vue.component("bl"+Button.name, Button);
  Vue.component("bl"+Cell.name, Cell);
  Vue.component("bl"+DatetimePicker.name, DatetimePicker);
  Vue.component("bl"+Modal.name, Modal);
  Vue.component("bl"+Navbar.name, Navbar);
  Vue.component("bl"+SelectPicker.name, SelectPicker);
  Vue.component("bl"+TabItem.name, TabItem);
  Vue.component("bl"+TabContainer.name, TabContainer);
  Vue.component("bl"+TabContainerItem.name, TabContainerItem);
  Vue.component("bl"+Popup.name, Popup);
  Vue.component("bl"+Picker.name, Picker);
  Vue.component("bl"+Switch.name, Switch);
  Vue.component("bl"+Swipeout.name, Swipeout);
  Vue.component("bl"+SwipeoutItem.name, SwipeoutItem);
  Vue.component("bl"+SwipeoutButton.name, SwipeoutButton);
  Vue.component("bl"+Slide.name, Slide);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  version,
  Actionsheet,
  Bar,
  Button,
  Cell,
  DatetimePicker,
  Modal,
  Toast,
  Navbar,
  SelectPicker,
  TabItem,
  TabContainer,
  TabContainerItem,
  Popup,
  Picker,
  Switch,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  Slide
};
