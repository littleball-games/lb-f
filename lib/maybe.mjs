const JUST = 'JUST'
const NOTHING = 'NOTHING'

export const maybe = (errorValue = '[nothing]', successCallback) => aMaybe => {
  switch (aMaybe.type) {
    case JUST:
      return successCallback(aMaybe.value)
    case NOTHING:
    default:
      return errorValue
  }
}

export const just = value =>
  ({
    value,
    type: JUST
  })

export const nothing = _ =>
  ({
    type: NOTHING
  })
