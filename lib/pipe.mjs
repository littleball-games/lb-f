import curry from './curry.mjs'

const pipe = (...args) =>
  (...rest) =>
    args.reduce((value, fn) => curry(fn)(value), ...rest)

export default pipe
