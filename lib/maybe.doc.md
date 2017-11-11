# maybe (just, nothing)

A `maybe` function is created by a `just` or a `nothing` function. It is used when there is a possibility that you may not have any data.

```javascript
import {maybe, just, nothing} from 'ln-f'

const maybeNumberResolver = maybe('is not a number', number => `number: ${number}`)

maybeNumberResolver(just(4))    // number: 4
maybeNumberResolver(nothing())  // is not a number

```

# In the real world

Whenever you may have incomplete data you can use a maybe. Let's say that a user fills out a profile by decides not to fill out an optional value such a nickname. You could end up with a table of users such as the following:

```javascript
const users = [
  {
    name: 'Bob',
    nickname: 'Fluffy'
  },
  {
    name: 'Sarah'
  }
```

We can create resolver with a `maybe` function that will output a predictable result in either case.

```javascript
const greet = maybe('Hi there!', nickname => `Hello ${user.nickname}!`)

users.map(user => greet(user.nickname)) // ['Hello Fluffy!', 'Hi there!']
```

# How it works

By wrapping a value in either `just` or `nothing` we can use a `maybe` function to resolve the value.

```javascript
const add10Years = maybe(nothing(), value => just(value + 10))
const getMyAge = maybe('I cannot tell you', age => `${age} years`)

const myAge = just(20) // maybe 20
const myAgeIn10Years = add10Years(myAge) // maybe 30
const happyResult = getMyAge(myAgeIn10Years) // 30 years

const noAge = nothing() // maybe nothing
const noAgeIn10Years = add10Years(noAge) // maybe nothing
const unhappyResult = getMyAge(noAgeIn10Years) // I cannot tell you
```
