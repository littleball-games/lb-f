const JUST = 'JUST'
const NOTHING = 'NOTHING'

// TODO move into utilities module
const isRequired = type => {
  throw new Error(`Error: expected to receive ${type} argument`)
}

const maybe = aMaybe => (
  errorValue = isRequired('errorValue'),
  successCallback = isRequired('successCallback')
) => {
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
  value === null || value === undefined
    ? nothing()
    : maybe({value, type: JUST})

// nothing :: _ -> Maybe Nothing
export const nothing = _ =>
  maybe({
    type: NOTHING
  })
