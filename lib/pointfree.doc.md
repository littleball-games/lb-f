# pointfree

Pointfree takes a string and optional integer. The string should be a method name on an existing object. The integer specifies the arity of the method (the number of expected arguments) and defaults to 1. It returns a curried function that accepts the specified number of arguments followed by the object containing the method. After all parameters are received it will call the method with the provided arguments and return the result.

```javascript

import { pointfree, curry } from 'lb-f'

const map = pointfree('map')
const reduce = pointfree('reduce', 2)

const array = [1, 2, 3]
const add = curry( (a, b) => a + b )
const add1 = add(1)

map(add1, array) // [2, 3, 4]
reduce(add, 0, array) // 6

```

## In the real world

Pointfree can be used to easily convert easily convert methods on arrays or other objects to a point free style.

TODO: more detail

```javascript
// TODO: example code
```

## How it works

TODO: explain the internals (it's almost the same as curry)

```javascript
// TODO: step through example
```
