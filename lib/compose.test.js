const load = require('@std/esm')(module)
const test = require('ava')
const compose = load('./compose.mjs').default

const greet = name => `Hello ${name}.`
const exclaim = message => message.toUpperCase()
const id = a => a
const ignoreAllButFirstArg = (a, b, c, d, e) => a
const toArray = (...args) => args

test('compose', t => {
  t.is(compose(exclaim, greet)('Bob'), 'HELLO BOB.')
  t.is(compose(greet, exclaim)('Jeff'), 'Hello JEFF.')

  t.deepEqual(compose(toArray, id)(1), [1],
    'handles functions with rest parameter ')
  t.is(compose(id, ignoreAllButFirstArg)(1), 1,
    'handles functions with multiple arguments in signature')
})
