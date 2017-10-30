# curry

Curry takes a function and 0 or more arguments. If all of the arguments for the initial function are passed in, it with call the function and return the result. Otherwise it will return a function that will wait for the other arguments.

```javascript
import {curry} from 'lb-f'

const add = curry(
  (a, b) => a + b
)

const add1 = add(1)

add1(5) // 6
```

## In the real world

A curry function can be used anytime you want to partly set up a function to be used multiple times later in the code. In this pseudo example, we are setting up a fetch request that could be used to get a users information. The only difference we care about is the `userId`. We can pass in the other information and complete the function with the `userId` when we have it later.

```javascript
const fetchUser = (token, userId) =>
  fetch(`/api/users/${userId}`, {
    headers: {
      'Authorization': `Bearer ${mySecretAuthToken}`
    }
  })

const getUser = curry(fetchUser, token)

// ...some time later
getUser('mpj')
  .then(welcomeUser)
  .catch(appologise)
```

## How it works

Lets take a simple `add` function the sums to numbers together. The following code shows the steps used to get to the result.

```javascript
const add = curry((a, b) => a + b)
// (...remainingArguments) => curry((a, b) => a + b, ...remainingArguments)

const add1 = add(1)
// add(1) = (...remainingArguments) => curry((a, b) => a + b, 1, ...remainingArguments)

const result = add1(5)
// result = curry((a, b) => a + b, 1, 5)
//  = (1, 5) => 1 + 5
//  = 1 + 5
//  = 6
```
