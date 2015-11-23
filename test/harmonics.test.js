var vows = require('vows')
var assert = require('assert')
var harmonics = require('../lib/harmonics')

vows.describe('gamut.harmonics').addBatch({
  'simple': function () {
    assert.deepEqual(harmonics('c2 d2 e2 f2 g2'),
      ['1P', '2M', '3M', '4P', '5P'])
  },
  'pitch classes are always ascending': function () {
    assert.deepEqual(harmonics('c d e f g a b c'),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '1P'])
    assert.deepEqual(harmonics('d e f g a b c d'),
      ['1P', '2M', '3m', '4P', '5P', '6M', '7m', '1P'])
    assert.deepEqual(harmonics('f g a b c d e f'),
      ['1P', '2M', '3M', '4A', '5P', '6M', '7M', '1P'])
  },
  'harmonics descending': function () {
    assert.deepEqual(harmonics('c2 b1 a1'), ['1P', '-2m', '-3m'])
  }
}).export(module)
