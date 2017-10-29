const load = require('@std/esm')(module)
const test = require('ava')
const {compose} = load('../lib/f.mjs')

const greet = name => `Hello ${name}.`
const exclaim = message => message.toUpperCase()

test('compose', t => {
  t.is(compose(exclaim, greet)('Bob'), 'HELLO BOB.')
  t.is(compose(greet, exclaim)('Jeff'), 'Hello JEFF.')
})
