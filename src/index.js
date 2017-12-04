import Actionsheet from '../packages/actionsheet';
import AddressPicker from '../packages/address-picker';
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
import Slide from '../packages/slide';
import directive from './directive';
import ModalJs from '../packages/modal/modal.js';
import Toast from '../packages/toast/toast.js';

const version = '2.2.9';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  // 指令 注册
  Object.keys(directive).forEach((key) => {
    Vue.directive(key, directive[key])
  })

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$modal = Vue.prototype.$modal = ModalJs;

  Vue.component("bl"+Actionsheet.name, Actionsheet);
  Vue.component("bl"+AddressPicker.name, AddressPicker);
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
  AddressPicker,
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
  Slide
};
