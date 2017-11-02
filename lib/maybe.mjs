import curry from './curry.mjs'

export const Null = Object.freeze(Object.create(null))

export function Maybe (x) {
  this.x = x
}

export function Nothing () {
  Maybe.call(this, Null)
  this.toString = () => 'Nothing'
}
Nothing.prototype = Object.create(Maybe.prototype)
Nothing.prototype.constructor = Nothing
Nothing.prototype.map = () => nothing

export function Just (x) {
  // For convenience, fail silently by converting to Nothing
  if (x === null || x === undefined) {
    return nothing
  }
  Maybe.call(this, x)
  this.toString = () => `Just(${this.x})`
}
Just.prototype = Object.create(Maybe.prototype)
Just.prototype.constructor = Just
Just.prototype.map = function (f) {
  const y = f(this.x)
  return (y === null || y === undefined)
    ? nothing
    : new Just(y)
}

export const just = x => new Just(x)
export const isJust = m => m instanceof Just

export const nothing = new Nothing()
export const isNothing = m => m instanceof Nothing

export const maybe = curry((fallback, f, maybeInstance) =>
  isNothing(maybeInstance)
    ? fallback
    : f(maybeInstance.x))
