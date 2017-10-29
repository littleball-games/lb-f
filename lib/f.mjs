export const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => curry(fn, ...args, ...rest)

export const flip = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args.slice(0, fn.length).reverse())
    : (...rest) => flip(fn, ...args, ...rest)

export const compose = (...args) =>
  (...rest) =>
    args.reduceRight((value, fn) => curry(fn)(value), ...rest)

export const pipe = (...args) =>
  (...rest) =>
    args.reduce((value, fn) => curry(fn)(value), ...rest)

export const merge = (...args) =>
  Object.assign({}, ...args)

export default {
  curry,
  flip,
  compose,
  pipe,
  merge
}
