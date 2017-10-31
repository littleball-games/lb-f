import curry from './curry.mjs'

const maybe = x => {
  const contents = x

  const isNothing = () =>
    contents === null || contents === undefined

  const map = fn =>
    maybe(isNothing() ? null : fn(contents))

  const open = curry(
    (isEmpty, fn) =>
      isNothing()
        ? isEmpty
        : fn(contents)
  )

  return {
    isNothing,
    map,
    open
  }
}

export default maybe
