const flip = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args.slice(0, fn.length).reverse())
    : (...rest) => flip(fn, ...args, ...rest)

export default flip
