const load = require('@std/esm')(module)
const test = require('ava')
const {curry} = load('../lib/f.mjs')

const add = (a, b) => a + b

test('curry', t => {
  t.is(curry(add)(1)(2), 3)
  t.is(curry(add, 3)(4), 7)
  t.is(curry(add, 5, 1), 6)
  t.is(curry(add)(2, 7), 9)
})
