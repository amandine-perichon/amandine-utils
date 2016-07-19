var assert = require('./assert')
var index = require('../lib/index')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')

var meaningOfLife = '42'


function isNumber (thing) {
  return typeof thing === 'number'
}

assert(isNumber(meaningOfLife), false, 'meaningOfLife is not a number datatype')

function isString (s) {
  return typeof s === 'string'
}

assert(isString(meaningOfLife), true, 'meaningOfLife is not a number datatype')

function isEmail (str) {
  return /^\w+\.?\w+\@\w+\.\w+$/.test(str)
}

assert(isEmail('thedonald@makeamericagreatagain.com'), true, 'isEmail detects an email')
assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
assert(isEmail('johnny.b.good'), false, 'isEmail does not give a false positive')

/*
 * countIF
 */

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // do you know which 4 are numbers?
var expectedStringCount = 2
var numberCount = index.countIf(isNumber, mixedArray)
var stringCount = index.countIf(isString, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

/*
 * filter
 */

var emails = index.filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')

/*
 * map
 */

var someNumbers = [2, 4, 6]
var expectedNumbers = [4, 8, 12]
var timesTwo = function (num) {
  return num * 2
}
var actualNumbers = index.map(timesTwo, someNumbers)
for (var i = 0; i < expectedNumbers.length; i++) {
  assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
}