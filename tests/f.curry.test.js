const load = require('@std/esm')(module)
const test = require('ava')
const {curry} = load('../lib/f.mjs')

const add = (a, b) => a + b

test('curry', t => {
  t.is(curry(add)(1)(2), 3, 'should work passing in a single argument at a time')
  t.is(curry(add, 3)(4), 7, 'should work passing some arguments straght away')
  t.is(curry(add, 5, 1), 6, 'should work passing all arguments straight away')
  t.is(curry(add)(2, 7), 9, 'should work passing all arguments later')
  t.is(curry(add, 1, 2, 3), 3, 'should ignore additional arguments')
})
