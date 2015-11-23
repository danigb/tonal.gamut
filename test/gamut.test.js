var vows = require('vows')
var assert = require('assert')
var gamut = require('../lib/gamut')

vows.describe('gamut.gamut').addBatch({
  'create gamuts': function () {
    assert.deepEqual(gamut('c fx d3 blah 5'), [ 'C', 'F##', 'D3', null, '5P' ])
  }
}).export(module)
