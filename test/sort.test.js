var vows = require('vows')
var assert = require('assert')
var sort = require('../lib/sort')

vows.describe('gamut.sort').addBatch({
  'notes': function () {
    assert.deepEqual(sort('c2 d5 f1 g#2 db1 ab2 h6 b3'),
      [null, 'Db1', 'F1', 'C2', 'G#2', 'Ab2', 'B3', 'D5'])
  },
  'intervals': function () {
    assert.deepEqual(sort('1 2 9 5 3M 3m 4A 4P blh'),
      [null, '1P', '2M', '3m', '3M', '4P', '4A', '5P', '9M'])
  }
}).export(module)
