var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')
var css = require('dom-css')

module.exports = Text
inherits(Text, EventEmitter)

function Text (root, opts, theme, uuid) {
  if (!(this instanceof Text)) return new Text(root, opts, theme, uuid)
  var self = this

  var container = require('./container')(root, opts.label, opts.help)

  var id = 'control-panel-text-' + opts.label.replace(/\s/g, '-') + '-' + uuid

  require('./label')(container, opts.label, theme, id)

  var input = container.appendChild(document.createElement('input'))
  input.type = 'text'
  input.id = id
  input.className = 'control-panel-text-' + uuid
  if (opts.initial) input.value = opts.initial

  input.onfocus = function () {
    css(input, {outline: 'none'})
  }

  css(input, {
    position: 'absolute',
    height: '2em',
    width: '64%',
    border: 'none',
    background: theme.background2,
    color: theme.text2,
    fontFamily: 'inherit'
  })

  setTimeout(function () {
    self.emit('initialized', input.value)
  })

  input.oninput = function (data) {
    opts.input && opts.input(data.target.value)
    self.emit('input', data.target.value)
  }
}
