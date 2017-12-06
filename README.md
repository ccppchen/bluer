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
import Bluer from 'bluer';
import 'bluer/lib/style.css';

Vue.use(Bluer);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Bar } from 'bluer';

Vue.component(Cell.name, Cell);
Vue.component(Bar.name, Bar);
```


Equals to

```javascript
import Vue from 'vue';
import Bluer from 'bluer';
import 'bluer/lib/style.css';

Vue.use(Bluer);

// import specified component

import Cell from 'bluer/lib/cell';
import 'bluer/lib/cell/style.css';

Vue.component(Cell.name, Cell);
```

## Development

```shell
npm run dev
```
## License
MIT
