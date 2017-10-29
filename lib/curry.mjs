const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => curry(fn, ...args, ...rest)

export default curry
