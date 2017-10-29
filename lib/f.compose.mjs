import curry from './f.curry.mjs'

const compose = (...args) =>
  (...rest) =>
    args.reduceRight((value, fn) => curry(fn)(value), ...rest)

export default compose
