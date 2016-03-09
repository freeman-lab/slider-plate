# input-panel

Embeddable panel of inputs for adding parameter selection to your app or visualization. Modern and minimalist design. Fully encapsulated module including JS and CSS. Can easily be added to any app or page. Heavily inspired by [`dat-gui`](https://github.com/dataarts/dat.gui), but streamlined, simplified, and written as a npm module for use with browserify.

----------------

> Supports the following input types

> `range` • `checkbox` • `text` • `color`

----------------

> Includes the following themes

> `dark` • `light`


## install

Add to your project with

```
npm install input-panel
```

## example

Create a panel with four elements and add to your page in the top right.

```javascript
var input = require('input-panel')
var panel = input([
  {type: 'range', label: 'range slider', min: 0, max: 100, initial: 20},
  {type: 'text', label: 'text', initial: 'my cool setting'},
  {type: 'checkbox', label: 'checkbox', initial: true},
  {type: 'color', label: 'color rgb', format: 'rgb', initial: 'rgb(100,200,100)'}
], 
  {theme: 'light', position: 'top-right'}
)
```

## usage

#### `panel = input([item1, item2, ...], [opts])`

The first argument is a list of items. Each one must have a `type` and `label` property, and can have an `initial` property with the initial value. Each `type` must be one of `range`, `input`, `checkbox`, and `color`. Each `label` must be unique. Some types have additional properties as specified below.

##### `range` input type
- `min` minimum value

- `max` maximum value

- `step` step size

##### `color` input type
- `format` formatting for colors, can be `'rgb'`, `'hex'`, or `'array'`

#### `panel.on('input')`

Emitted every time any of the inputs change. Returns an object with the state of all inputs by label.
