# lb-f

[![CircleCI](https://circleci.com/gh/littleball-games/lb-f.svg?style=svg)](https://circleci.com/gh/littleball-games/lb-f)

A collection of functional programming functions

## Installation

`npm i lb-f`

## Usage

```javascript
// node modules
const {curry} = require('lb-f')

// ES2015 modules
import {curry} from 'lb-f'

// create a standard function
const add = (a + b) => a + b

// wrap it in a curry
const sum = curry(add)

// now you can call argument by argument
sum(1, 2) // 3
sum(1)(2) // 3
```
