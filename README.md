# tonal.gamut

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.gamut)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.gamut.svg)](https://www.npmjs.com/package/tonal.gamut)
[![license](https://img.shields.io/npm/l/tonal.gamut.svg)](https://www.npmjs.com/package/tonal.gamut)
[![tonal](https://img.shields.io/badge/tonal-lib-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.gamut` is a collection of javascript functions to manipulate notes and intervals in an uniform way:

```js
var gamut = require('tonal.gamut')
gamut('a b c blah 5P') // => ['A', 'B', 'C', null, '5P']
```

This is a low level library part of [tonal](https://www.npmjs.com/package/tonal). This library is the foundation of [tonal.set](), [tonal.scale]() and [tonal.chord]()

## Install

Only via npm: `npm i --save tonal.gamut`

## User guide

In [tonal](https://www.npmjs.com/package/tonal) a gamut is a collection of pitches (notes, intervals or pitch classes). The gamut module provides functions to work with them.

#### Create gamuts

```js
gamut('c d | e')
gamut.split('c d | e')
```

#### Rotate gamuts

```js
gamut.rotate(2, 'c d e') // => ['e', 'c', 'd']
```

#### Sort pitches

The `gamut.sort` function sorts a gamut using an ascending pitch order:

```js
kit.gamut.sort('F G D A C') // => ['C', 'D', 'F', 'G', 'A']
```

#### Select elements from a gamut

You can select elements with a list of 1-based index numbers and a gamut:

```js
gamut.select('1 3 5', 'C D E F G A B') // => ['C', 'E', 'G']
```

## License

MIT License
