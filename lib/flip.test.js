const load = require('@std/esm')(module)
const test = require('ava')
const flip = load('./flip.mjs').default

const add = (a, b) => a + b

test('flip', t => {
  t.is(flip(add)('x')('y'), 'yx', 'should work passing argument in individually')
  t.is(flip(add, 'a', 'b'), 'ba', 'should work passing all arguments at once')
  t.is(flip(add, 'c')('d'), 'dc', 'should work passing some arguments straight away')
  t.is(flip(add)('e', 'f'), 'fe', 'should work passing in arguments later')
  t.is(flip(add, 'x', 'y', 'z'), 'yx', 'should ignore additional arguments')
})
