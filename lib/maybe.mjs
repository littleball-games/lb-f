import curry from './curry'

export const maybe = curry((defaultValue, callback, aMaybe) => {
  const value = aMaybe.chain && aMaybe.chain(x => x)
  return (value === nothing || aMaybe instanceof Maybe === false)
    ? defaultValue
    : callback(value)
})

export function Maybe () {}

export const just = x => Object.create(Maybe.prototype, {
  contents: { enumerable: true, value: `Just(${x})` },
  map: { value: f => just(f(x)) },
  chain: { value: f => f(x) }
})

export const nothing = Object.create(Maybe.prototype, {
  contents: { enumerable: true, value: 'nothing' },
  map: { value: _ => nothing },
  chain: { value: _ => nothing }
})
