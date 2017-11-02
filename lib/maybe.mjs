import curry from './curry.mjs'

const isNull = x => x === undefined || x === null
const trycatch = f => {
  try {
    return f()
  } catch (e) {
    return null
  }
}

export const nothing = Object.freeze({
  map: () => nothing,
  join: () => nothing,
  chain: () => nothing
})

export const just = x => ({
  isJust: true,
  map: f => {
    const y = trycatch(() => f(x))
    return isNull(y) ? nothing : just(y)
  },
  join: () => x,
  chain: f => just(x).map(f).join()
})

export const isNothing = m => m === nothing
export const isJust = m => !!m.isJust
export const isMaybe = m => isNothing(m) || isJust(m)

export const fromMaybe = curry((fallback, m) =>
  isNothing(m) ? fallback : m.join())

export const maybe = curry((fallback, f, m) => {
  const y = m.chain(f)
  return isNothing(y) ? fallback : y
})

export const catMaybes = xs => xs.filter(isJust)
