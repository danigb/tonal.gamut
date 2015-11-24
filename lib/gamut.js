'use strict'

var split = require('./split')
var pitch = require('tonal.pitch/pitch')

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 * @param {String|Array} source - a list of elements
 * @return {Array} a list of pitches
 *
 * @example
 * gamut('c2 bb fx blah') // => ['C2', 'Bb', 'F##', null]
 */
module.exports = function (g) {
  return split(g).map(pitch)
}
