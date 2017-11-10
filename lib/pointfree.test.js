const load = require('@std/esm')(module)
const test = require('ava')
const pointfree = load('./pointfree.mjs').default

test('pointfree', t => {
  const obj = {
    arity1method: x => x,
    arity2method: (x, y) => x + y,
    arity3method: (x, y, z) => x + y + z
  }

  const single = pointfree('arity1method')
  t.is(single(1, obj), 1, 'calls arity 1 method with provided parameter')
  t.is(single(11)(obj), 11, 'works with arity 1 method when arguments given one at a time')

  const double = pointfree('arity2method', 2)
  t.is(double(2, 2, obj), 4, 'calls arity 2 method with provided parameters')
  t.is(double(22)(22)(obj), 44, 'works with arity 2 method when arguments given one at a time')

  const triple = pointfree('arity3method', 3)
  t.is(triple(3, 3, 3, obj), 9, 'calls arity 3 method with provided parameters')
  t.is(triple(33)(33)(33)(obj), 99, 'works with arity 3 method when arguments given one at a time')
})
