const load = require('@std/esm')(module)
const test = require('ava')
const {pipe} = load('../lib/f.mjs')

const greet = name => `Hello ${name}.`
const exclaim = message => message.toUpperCase()

test('compose', t => {
  t.is(pipe(greet, exclaim)('Bob'), 'HELLO BOB.')
  t.is(pipe(exclaim, greet)('Jeff'), 'Hello JEFF.')
})
