## `gamut`

In music.kit a gamut is a collection of intervals, pitch classes or notes.
Scales, chords, pitch sets are examples of gamuts.






## `gamut.harmonics`

Get the distances from the first note of a gamut to the rest of notes

Pitch classes are treated as notes with octave equal 0

### Parameters

* `gamut` **`String or Array`** the list of notes


### Examples

```js
gamut.harmonics('c2 e2 g2') // => ['1P', '3M', '5P']
```



## `gamut.operation`

Apply a function to an array of array pitches






## `gamut.rotate`

Rotate the gamut

### Parameters

* `count` **`Integer`** the number of rotations
* `gamut` **`String or Array`** a list of notes or intervals


### Examples

```js
var rotate = require('music.kit/gamut/rotate')
rotate(1, 'C D E') // => ['D', 'E', 'C']
```

Returns `Array` the gamut rotated count times


## `gamut.select`

Select some elements from a gamut

### Parameters

* `numbers` **`String or Array`** a __1-based__ index of the elements
* `gamut` **`String or Array`** the notes or intervals


### Examples

```js
var select = require('tonal.gamut/select')
select('1 3 5', 'C D E F G A B') // => ['C', 'E', 'G']
```

Returns `Array` the selected elements


## `gamut.sort`

Get a gamut in ascdening pitch order

### Parameters

* `gamut` **`String or Array`** the gamut to sort


### Examples

```js
var sort = require('music.kit/gamut.sort')
sort('c5 d2 f4 D2') // => ['D2', 'D2', 'F4', 'C5']
```

Returns `Array` the gamut in sort pitch order


## `gamut.split`

Convert a source to an array. If the source is an array, return it.

Aside from an array itself, the source can be a
string with elements separated by spaces, commas or bars (`|`) or a single
element that will be wrapped inside an array

This function __does not perform any transformation__ of the array elements.
and __it always return an array, even if its empty__.

### Parameters

* `source` **`String or Array`** the source


### Examples

```js
split = require('music.kit/gamut.split')
split('a | B C , Dmaj7') // => ['a', 'B', 'C', 'Dmaj7']
split() // => []
```

Returns `Array` the source as array


