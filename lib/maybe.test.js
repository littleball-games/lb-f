const load = require('@std/esm')(module)
const test = require('ava')
const {just, nothing, maybe} = load('./maybe.mjs')

test.serial('maybe', t => {
  const defaultValue = 'nothing to see'
  const justApplicator = value => value
  const maybeResolver = maybe(defaultValue, justApplicator)

  t.is(maybeResolver(just(3)), 3)
  t.is(maybeResolver(nothing), 'nothing to see')
})

const defaultValue = 'nothing to see'
const justApplicator = value => value
const maybeResolver = maybe(defaultValue, justApplicator)

test('map', t => {
  const just2 = just(2)
  const add1 = number => number + 1

  t.is(maybeResolver(just2.map(add1)), 3)
  t.is(maybeResolver(nothing.map(add1)), 'nothing to see')
})

test('chain', t => {
  const justHello = just('hello')

  const toUpperMaybe = string => just(string.toUpperCase())
  const returnNothing = _ => nothing

  t.is(maybeResolver(justHello.chain(toUpperMaybe)), 'HELLO')
  t.is(maybeResolver(nothing.chain(returnNothing)), 'nothing to see')
})
