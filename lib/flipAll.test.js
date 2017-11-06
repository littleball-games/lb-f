const load = require('@std/esm')(module)
const test = require('ava')
const flipAll = load('./flipAll.mjs').default

const add = (a, b) => a + b
const add4 = (a, b, c, d) => a + b + c + d

test('flipAll', t => {
  t.is(flipAll(add)('x')('y'), 'yx', 'flips after accepting individual arguments')
  t.is(flipAll(add, 'a', 'b'), 'ba', 'flips after accepting all arguments at once')
  t.is(flipAll(add, 'c')('d'), 'dc', 'flips after accepting some arguments straight away')
  t.is(flipAll(add)('e', 'f'), 'fe', 'flips after only function first, with batched arugments later')
  t.is(flipAll(add, 'x', 'y', 'z'), 'yx', 'ignores extraneous arguments')

  t.is(flipAll(add4)('a', 'b', 'c', 'd'), 'dcba', 'flips entire parameter list')
})
