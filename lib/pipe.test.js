const load = require('@std/esm')(module)
const test = require('ava')
const pipe = load('./pipe.mjs').default

const greet = name => `Hello ${name}.`
const exclaim = message => message.toUpperCase()
const id = a => a
const ignoreAllButFirstArg = (a, b, c, d, e) => a
const toArray = (...args) => args

test('compose', t => {
  t.is(pipe(greet, exclaim)('Bob'), 'HELLO BOB.')
  t.is(pipe(exclaim, greet)('Jeff'), 'Hello JEFF.')

  t.deepEqual(pipe(id, toArray)(1), [1],
    'handles functions with rest parameter ')
  t.is(pipe(ignoreAllButFirstArg, id)(1), 1,
    'handles functions with multiple arguments in signature')
})
