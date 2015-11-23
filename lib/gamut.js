'use strict'

var split = require('./split')
var pitch = require('tonal.pitch/pitch')

module.exports = function (g) {
  return split(g).map(pitch)
}
