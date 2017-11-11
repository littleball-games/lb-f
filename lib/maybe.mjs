const justValues = new Map()

export const maybe = (defaultValue = '[nothing]', successCallback) => aMaybe => {
  const isJust = justValues.get(aMaybe)

  if (!isJust) {
    return defaultValue
  }

  justValues.delete(aMaybe)
  return successCallback(isJust)
}

export const just = value => {
  const key = {
    map: fn => just(fn(value))
  }
  justValues.set(key, value)
  return key
}

export const nothing = _ =>
  ({
    map: _ => nothing()
  })
