# tonal.gamut

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.gamut)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.gamut.svg)](https://www.npmjs.com/package/tonal.gamut)
[![license](https://img.shields.io/npm/l/tonal.gamut.svg)](https://www.npmjs.com/package/tonal.gamut)
[![tonal](https://img.shields.io/badge/tonal-lib-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.gamut` is a [compact](https://rawgit.com/danigb/tonal.gamut/master/dist/disc.html) collection of javascript functions to work with collections of notes or intervals:

```js
var gamut = require('tonal.gamut')
gamut.set('c2 e6 g2 b') // => ['C', 'E', 'G', 'B']
var maj7 = gamut.chord('1 3 5 7')
maj7('A2') // => ['A2', 'C#3', 'E3', 'G#3']
```

This is part of [tonal](https://www.npmjs.com/package/tonal)

## Install

Via npm: `npm i --save tonal.gamut` or use the [distribution file](https://raw.githubusercontent.com/danigb/tonal.gamut/master/dist/tonal.gamut.min.js) (exports `gamut` as window global):

```html
<script src="tonal.gamut.min.js"></script>
<script>console.log(gamut.scale('1 2 3 4 5 6 7'), 'Eb')</script>
```

## User guide

In [tonal](https://www.npmjs.com/package/tonal) a gamut is a collection of pitches (notes, intervals or pitch classes). Pitch sets, chord and scales are different gamut types.

#### Create gamuts

A gamut is a collection of notes or intervals:

```js
gamut('a b c 1 2 3 blah') // => ['A', 'B', 'C', '1P', '2M', '3M', null]
gamut('c d | e f') // => ['C', 'D', 'E' 'F']
```

#### Harmonizers and harmonics

A gamut harmonizer is a function that given a note returns a gamut:

```js
var octaves = gamut.harmonizer('1 -8 -15')
octaves('C2') // => ['C2', 'C1', 'C0']
```

`harmonics` function extracts the relative distances from the first note of the gamut to the rest:

```js
gamut.harmonics('C E G') // => ['1P', '3M', '5P']
```


#### Create pitch sets

A pitch set is an ordered collection of unique pitch classes. You can create a pitch set from a collection of notes:

```js
gamut.set('f# e4 C2 g5 d3') // => ['C', 'D', 'E', 'F#', 'G']
```

The set is always ordered by pitch, where 'C' is the lowest and 'B' the highest.

#### Create scales

Scales are a sets with a tonic. The first note of the scale is the tonic. Scales can be created from a list of intervals and a tonic:

```js
gamut.scale('1 2 3m 4 5 6m 7', 'D') // => ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#']
```

This function can be partially applied:

```js
var dorian = gamut.scale('1 2 3b 4 5 6 7b')
dorian('eb') // => [ 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db' ]
```

#### Create chords

Chord are similar to scales, but can span more than an octave:

```js
var major = gamut.chord('1 3 5')
major('A') // => ['A', 'C#', 'E']
```

#### Select elements from a gamut

You can select elements with a list of 1-based index numbers and a gamut:

```js
gamut.select('1 3 5', 'C D E F G A B') // => ['C', 'E', 'G']
```

#### Rotate gamuts

```js
gamut.rotate(2, 'c d e') // => ['e', 'c', 'd']
```

#### Sort

The `gamut.sort` function sorts a gamut using an ascending pitch order:

```js
kit.gamut.sort('F G D A C') // => ['C', 'D', 'F', 'G', 'A']
```

#### More...

Read the [generated documentation]()

## License

MIT License
