const load = require('@std/esm')(module)
const test = require('ava')
const {merge} = load('../lib/f.mjs')

test('curry', t => {
  let a = {
    aNumber: 'one'
  }

  let b = {
    aLetter: 'B'
  }

  const result = merge(a, b)

  t.deepEqual(
    result,
    {
      aNumber: 'one',
      aLetter: 'B'
    },
    'Should create a new object that has both properties'
  )

  t.deepEqual(
    a,
    {aNumber: 'one'},
    'should not mutate initial object'
  )

  t.deepEqual(
    b,
    {aLetter: 'B'},
    'should not mutate other objects'
  )

  t.deepEqual(
    merge(a, b, {another: 'property'}),
    {
      aNumber: 'one',
      aLetter: 'B',
      another: 'property'
    },
    'should allow infinite objects to be merged'
  )
})
