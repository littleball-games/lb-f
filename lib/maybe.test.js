const load = require('@std/esm')(module)
const test = require('ava')
const {
  isJust,
  isNothing,
  just,
  nothing,
  maybe,
  Maybe
} = load('./maybe.mjs')

const id = x => x

test('nothing', t => {
  t.is(nothing instanceof Maybe, true, 'is a Maybe')
  t.is(isNothing(nothing), true, 'is nothing')
  t.is(isJust(nothing), false, 'is not a just')
  t.is(isNothing(nothing.map(id)), true, 'maps back to a Nothing')
})

test('just', t => {
  t.is(just(1) instanceof Maybe, true, 'is a Maybe')
  t.is(isNothing(just(2)), false, 'is not nothing')
  t.is(isJust(just(3)), true, 'is a just')
  t.is(isNothing(just(null)), true, 'converts bad Just to a Nothing')
  t.is(isJust(just(4).map(id)), true, 'maps to a Just for good fn return')
  t.is(isJust(just(5).map(id)), true, 'maps back to a Just for good value')
  t.is(isNothing(just(6).map(() => null)), true, 'maps to Nothing for bad fn return')
})

test('maybe', t => {
  t.is(maybe(0, id, nothing), 0, 'resolves nothing to fallback value')
  t.is(maybe(0)(id)(nothing), 0, 'is curried')
  t.is(maybe(0, id, just(42)), 42, 'resolves just to result of fn called with internal value')
})
