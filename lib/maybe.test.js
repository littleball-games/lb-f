const load = require('@std/esm')(module)
const test = require('ava')
const maybe = load('./maybe.mjs').default
const curry = load('./curry.mjs').default

test('maybe.open', t => {
  t.is(maybe(4).open('isEmpty', x => x), 4, 'should process the value')
  t.is(maybe().open('isEmpty', x => x), 'isEmpty', 'should return empty option')
})

test('maybe.isNothing', t => {
  t.is(maybe(4).isNothing(), false, 'a value is something')
  t.is(maybe(0).isNothing(), false, '0 is a value which is something')
  t.is(maybe(false).isNothing(), false, 'false is a value which is something')
  t.is(maybe(undefined).isNothing(), true, 'undefined is nothing')
  t.is(maybe(null).isNothing(), true, 'null is nothing')
  t.is(maybe().isNothing(), true, 'undefined is nothing')
})

test('maybe map', t => {
  const add = curry((a, b) => a + b)

  t.is(
    maybe(5)
      .map(add(10))
      .open('isEmpty', x => x),
    15,
    'mapping functions should create a new maybe'
  )

  t.is(
    maybe(2)
      .map(add(1))
      .open('isEmpty', x => x),
    3,
    'mapping functions should create an new maybe'
  )

  t.is(
    maybe()
      .map(add(4))
      .open('isEmpty', x => x),
    'isEmpty',
    'mapping nothing should return maybe nothing'
  )
})
