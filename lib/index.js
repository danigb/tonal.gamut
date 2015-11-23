'use strict'

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 */
var gamut = require('./gamut')
gamut.sort = require('./sort')
gamut.harmonics = require('./harmonics')
gamut.operation = require('./operation')
gamut.split = require('./split')
gamut.rotate = require('./rotate')
gamut.select = require('./select')
module.exports = gamut
