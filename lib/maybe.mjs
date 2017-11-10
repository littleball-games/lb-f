const JUST = 'JUST'
const NOTHING = 'NOTHING'

const maybe = aMaybe => (errorValue, successFn) => {
  switch (aMaybe.type) {
    case JUST:
      return successFn(aMaybe.value)
    case NOTHING:
    default:
      return errorValue
  }
}

// just :: a -> Maybe a
export const just = value =>
  value === null || value === undefined
    ? nothing()
    : maybe({value, type: JUST})

// nothing :: _ -> Maybe Nothing
export const nothing = _ =>
  maybe({
    type: NOTHING
  })
