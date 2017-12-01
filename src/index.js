import Actionsheet from '../packages/actionsheet';
import Cell from '../packages/cell';
import Button from '../packages/button';
import Popup from '../packages/popup';
import Picker from '../packages/picker';
import Switch from '../packages/switch';

const version = '2.2.9';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component("bl"+Actionsheet.name, Actionsheet);
  Vue.component("bl"+Cell.name, Cell);
  Vue.component("bl"+Button.name, Button);
  Vue.component("bl"+Popup.name, Popup);
  Vue.component("bl"+Picker.name, Picker);
  Vue.component("bl"+Switch.name, Switch);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Actionsheet,
  Cell,
  Button,
  Popup,
  Picker,
  Switch
};
