const JUST = 'JUST'
const NOTHING = 'NOTHING'

const maybe = aMaybe => (errorValue = '[nothing]', successCallback) => {
  switch (aMaybe.type) {
    case JUST:
      return successCallback(aMaybe.value)
    case NOTHING:
    default:
      return errorValue
  }
}

// just :: a -> Maybe a
export const just = value =>
  maybe({
    value,
    type: JUST
  })

// nothing :: _ -> Maybe Nothing
export const nothing = _ =>
  maybe({
    type: NOTHING
  })
