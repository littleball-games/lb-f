const load = require('@std/esm')(module)
const test = require('ava')
const {
  catMaybes,
  fromMaybe,
  isJust,
  isMaybe,
  isNothing,
  just,
  maybe,
  nothing
} = load('./maybe.mjs')

const id = x => x
const add1 = x => x + 1

test('nothing', t => {
  t.is(isNothing(nothing), true, 'is nothing')
  t.is(isMaybe(nothing), true, 'is a maybe')
  t.is(isJust(nothing), false, 'is not a just')

  t.is(isNothing(nothing.map(id)), true, 'maps back to nothing')
  t.is(isNothing(nothing.join(id)), true, 'joins back to nothing')
  t.is(isNothing(nothing.chain(id)), true, 'chains back to nothing')
})

test('just', t => {
  t.is(isJust(just(1)), true, 'is a just')
  t.is(isMaybe(just(2)), true, 'is a maybe')
  t.is(isNothing(just(3)), false, 'is not nothing')

  t.is(just(4).join(), 4, 'joins to internal value')

  t.is(isJust(just(5).map(id)), true, 'maps to a just for valid return')
  t.is(just(6).map(add1).join(), 7, 'maps to a just containing result')
  t.is(isNothing(just(8).map(() => null)), true, 'maps to nothing for null return')
  t.is(just(9).map(x => just(x)).join().join(), 9, 'maps returned just to nested justs')

  t.is(just(10).chain(add1), 11, 'chains to result for valid function return')
  t.is(just(12).chain(x => just(x)).join(), 12, 'chain flattens 1 layer of nested justs')
  t.is(isNothing(just(13).chain(() => null)), true, 'joins to nothing for null return')
})

test('maybe', t => {
  t.is(maybe(0, id, nothing), 0, 'resolves nothing to fallback value')
  t.is(maybe(0)(id)(nothing), 0, 'is curried')
  t.is(maybe(0, add1, just(42)), 43, 'resolves just to result of fn called with internal value')
})

test('fromMaybe', t => {
  t.is(fromMaybe('default', nothing), 'default', 'resolves nothing to fallback value')
  t.is(fromMaybe('default')(nothing), 'default', 'is curried')
  t.is(fromMaybe('default', just(52)), 52, 'resolves just to its internal value')
})

test('catMaybes', t => {
  const list = [
    nothing,
    just(1),
    nothing,
    just(2),
    nothing,
    just('test')
  ]
  const justs = catMaybes(list)
  const expected = [ 1, 2, 'test' ]
  t.is(justs.length, 3, 'returns list with only justs')
  justs.map((j, i) => {
    t.is(isJust(j), true, 'is a just')
    t.is(j.join(), expected[i], 'contains expected value')
  })
})
