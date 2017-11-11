const load = require('@std/esm')(module)
const test = require('ava')
const {just, nothing, maybe} = load('./maybe.mjs')

test('maybe', t => {
  const errorValue = 'nothing to see'
  const successFn = value => value
  const maybeResolver = maybe(errorValue, successFn)

  t.is(maybeResolver(just(3)), 3)
  t.is(maybeResolver(nothing()), 'nothing to see')
})
