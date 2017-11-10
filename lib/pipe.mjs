import curry from './curry.mjs'

const pipe = (...args) =>
  (...moreArgs) =>
    args.reduce((value, fn) => curry(fn)(value), ...moreArgs)

export default pipe
