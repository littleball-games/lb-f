const load = require('@std/esm')(module)
const test = require('ava')
const {just, nothing, maybe} = load('./maybe.mjs')

test('just', t => {
  t.is(typeof just(1), 'object')
  t.is(typeof just(1).map, 'function')
})

test('nothing', t => {
  t.is(typeof nothing(1), 'object')
  t.is(typeof nothing(1).map, 'function')
})

test('maybe', t => {
  const errorValue = 'nothing to see'
  const successFn = value => value
  const maybeResolver = maybe(errorValue, successFn)

  t.is(maybeResolver(just(3)), 3)
  t.is(maybeResolver(nothing()), 'nothing to see')
})

test('maybe.map', t => {
  const add1 = number => number + 1
  const maybeResolver = maybe('no value', x => x)

  t.is(maybeResolver(just(2).map(add1)), 3)
  t.is(maybeResolver(nothing().map(add1)), 'no value')
})
