import curry from './curry'

const JUST = 'JUST'
const NOTHING = 'NOTHING'

export const maybe = (defaultValue = '[nothing]', successCallback) => aMaybe => {
  switch (aMaybe.type) {
    case JUST:
      return successCallback(aMaybe.value)
    case NOTHING:
    default:
      return defaultValue
  }
}

export const just = value =>
  ({
    value,
    type: JUST,
    map: f => just(f(value)),
    chain: f => f(value)
  })

export const nothing = _ =>
  ({
    type: NOTHING,
    map: _ => nothing,
    chain: _ => nothing
  })
