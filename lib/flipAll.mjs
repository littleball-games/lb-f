const flip = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args.slice(0, fn.length).reverse())
    : (...moreArgs) => flip(fn, ...args, ...moreArgs)

export default flip
