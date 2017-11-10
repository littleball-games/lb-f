const compose = (...args) =>
  (...moreArgs) =>
    args.reduceRight((value, fn) => fn(value), ...moreArgs)

export default compose
