const load = require('@std/esm')(module)
const test = require('ava')
const flip = load('./flip.mjs').default

const add = (a, b) => a + b
const add4 = (a, b, c, d) => a + b + c + d

test('flip', t => {
  t.is(flip(add)('x')('y'), 'yx', 'flips after accepting individual arguments')
  t.is(flip(add, 'a', 'b'), 'ba', 'flips after accepting all arguments at once')
  t.is(flip(add, 'c')('d'), 'dc', 'flips after accepting some arguments straight away')
  t.is(flip(add)('e', 'f'), 'fe', 'flips after only function first, with batched arugments later')
  t.is(flip(add, 'x', 'y', 'z'), 'yx', 'ignores extraneous arguments')

  t.is(flip(add4)('a', 'b', 'c', 'd'), 'bacd', 'flips only first two arguments')
})
