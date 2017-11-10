const load = require('@std/esm')(module)
const test = require('ava')
const {just, nothing} = load('./maybe.mjs')

test('just', t => {
  t.is(typeof just(4), 'function', 'should return maybe function')
})

test('nothing', t => {
  t.is(typeof nothing(), 'function', 'should return maybe function')
})

test('maybe', t => {
  const errorValue = 'nothing to see'
  const successFn = value => value

  const maybe3 = just(3)
  t.is(maybe3(errorValue, successFn), 3)

  const maybeNothing = nothing()
  t.is(maybeNothing(errorValue, successFn), 'nothing to see')

  const maybeSomething = just()
  t.is(maybeSomething(errorValue, successFn), 'nothing to see')
})

test('maybe without required fields', t => {
  const just4 = just(4)

  t.throws(
    () => {
      just4() // not passing in errorValue
    },
    'Error: expected to receive errorValue argument'
  )

  t.throws(
    () => {
      just4('isEmpty') // not passing in a success callback
    },
    'Error: expected to receive successCallback argument'
  )
})
