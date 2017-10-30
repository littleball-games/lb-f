import curry from './curry.mjs'

const compose = (...args) =>
  (...moreArgs) =>
    args.reduceRight((value, fn) => curry(fn)(value), ...moreArgs)

export default compose
