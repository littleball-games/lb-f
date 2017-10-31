const pointfree = (m, arity = 1) => {
  const pointfreeCurry = (...args) =>
    args.length >= arity + 1
      ? args[arity][m](...args.slice(0, arity))
      : (...moreArgs) => pointfreeCurry(...args, ...moreArgs)
  return pointfreeCurry
}

export default pointfree
