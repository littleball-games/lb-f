const load = require('@std/esm')(module)
const test = require('ava')
const {flip} = load('../lib/f.mjs')

const add = (a, b) => a + b

test('flip', t => {
  t.is(flip(add)('x')('y'), 'yx')
  t.is(flip(add, 'a', 'b'), 'ba')
  t.is(flip(add, 'c')('d'), 'dc')
  t.is(flip(add)('e', 'f'), 'fe')
})
