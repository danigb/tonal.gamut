'use strict'

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 */
var gamut = require('./gamut')
gamut.set = require('./set')
gamut.scale = require('./scale')
gamut.chord = require('./chord')
gamut.sort = require('./sort')
gamut.harmonics = require('./harmonics')
gamut.operation = require('./operation')
gamut.split = require('./split')
gamut.rotate = require('./rotate')
gamut.select = require('./select')

if (typeof module === 'object' && module.exports) module.exports = gamut
if (typeof window !== 'undefined') window.gamut = gamut
