const flip = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args.slice(0, 2).reverse(), ...args.slice(2, fn.length))
    : (...moreArgs) => flip(fn, ...args, ...moreArgs)

export default flip
