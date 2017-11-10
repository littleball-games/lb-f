const pipe = (...args) =>
  (...moreArgs) =>
    args.reduce((value, fn) => fn(value), ...moreArgs)

export default pipe
