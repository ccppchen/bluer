# BLUER

> Mobile UI elements for **Vue 2.0**

## Installation
```shell
npm i bluer -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import Mint from 'bluer';
import 'bluer/lib/style.css';

Vue.use(Mint);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'bluer';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


Equals to

```javascript
import Vue from 'vue';
import Mint from 'bluer';
import 'bluer/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'bluer/lib/radio';
import 'bluer/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "bluer", "style": true }
  ]]]
}
```

## Development

```shell
npm run dev
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/bluer/blob/master/.github/CONTRIBUTING_en-us.md) before making a pull request.

## License
MIT
