var split = require('./split')
var coord = require('tonal.pitch/coord')
var str = require('tonal.pitch/str')

/**
 * Apply a function to an array of array pitches
 *
 * @name gamut.operation
 * @function
 */
module.exports = function op (fn, source) {
  if (arguments.length > 1) return op(fn)(source)
  return function (source) {
    var g = split(source)
    if (Array.isArray(g[0])) return fn(g)
    var v = fn(g.map(coord))
    return Array.isArray(v) ? v.map(str) : v
  }
}
