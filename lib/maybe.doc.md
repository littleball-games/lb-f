# maybe (just, nothing)

A `maybe` function is created by a `just` or a `nothing` function. It is used when there is a possibility that you may not have any data.

```javascript
import {just} from 'ln-f'

const maybe4 = just(4)

maybe4('no value', value => `set to ${value}`) // set to 4

const maybeNothing = nothing()

maybeNothing('empty', value => 'not empty') // empty
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
    // no nickname... this could cause problems
  }
```

Later we want to greet the user by nickname

```javascript
const greet = user => `Hello ${user.nickname}!`

greet(users[0]) // Hello Fluffy!
greet(users[1]) // Hello undefined!
```

Now lets see what it would look like with a maybe.

```javascript
// lets just convert the existing users for now
const safeUsers = users.map(user => {
  return {
    name: user.name,
    nickname: user.nickname ? just(user.nickname) : nothing()
  }
})

// now lets re-write the greet function to work with a maybe
const safeGreet = user => user.nickname('Hi there!', value => `Hey ${value}!`)

greet(users[0]) // Hey Fluffy!
greet(users[1]) // Hi there!
```

There is a little extra work, but in the long run by seeing a maybe function, we can handle this case early (not when the users spot an issue).

# How it works

By wrapping a value in either `just` or `nothing` we get the same `maybe` function back that we can pass around, and output when we need it.

```javascript
const add10Years = maybe => maybe(nothing(), value => just(value + 10))

const myAge = just(20) // maybe 20
const myAgeIn10Years = add10Years(myAge) // maybe 30
const happyResult = myAgeIn10Years('I cannot tell you', age => `${age} years`) // 30 years

const noAge = nothing()
const noAgeIn10Years = add10Years(noAge)
const unhappyResult = noAgeIn10Years('I cannot tell you', age => `${age} years`) // I cannot tell you
```
