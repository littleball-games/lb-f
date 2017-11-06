const pointfree = (method, arity = 1) => {
  const pointfreeCurry = (...args) =>
    args.length >= arity + 1
      ? args[arity][method](...args.slice(0, arity))
      : (...moreArgs) => pointfreeCurry(...args, ...moreArgs)
  return pointfreeCurry
}

export default pointfree
