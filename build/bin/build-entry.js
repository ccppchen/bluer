var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}\';';
var ISNTALL_COMPONENT_TEMPLATE = '  Vue.component("bl"+{{name}}.name, {{name}});';
var MAIN_TEMPLATE = `{{include}}
import directive from './directive';
import ModalJs from '../packages/modal/modal.js';
import Toast from '../packages/toast/toast.js';
import infiniteScroll from '../packages/infinite-scroll/index.js';

const version = '{{version}}';
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

{{install}}
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  version,
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if ([
      // directives
    'InfiniteScroll',
    'Lazyload',

      // services
    'MessageBox',
    'Toast',
    'Indicator'
  ].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
