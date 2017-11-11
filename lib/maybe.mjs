import curry from './curry'

export const maybe = curry((defaultValue, callback, aMaybe) =>
  aMaybe instanceof Just
    ? callback(aMaybe.value)
    : defaultValue
)

export const just = value => new Just(value)

function Just (value) { this.value = value }

Just.prototype.map = function (f) { return just(f(this.value)) }
Just.prototype.chain = function (f) { return f(this.value) }

export const nothing = () => new Nothing()

function Nothing () {}

Nothing.prototype.map = _ => nothing()
Nothing.prototype.chain = _ => nothing()
