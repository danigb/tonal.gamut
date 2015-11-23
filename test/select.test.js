var vows = require('vows')
var assert = require('assert')
var select = require('../lib/select')

vows.describe('gamut.select').addBatch({
  'select': function () {
    assert.deepEqual(select('1 3 5', 'C D E f g a b'), ['C', 'E', 'g'])
  },
  'curry': function () {
    assert.deepEqual(select('1 3 5')('C D E f g a b'), ['C', 'E', 'g'])
  }
}).export(module)
