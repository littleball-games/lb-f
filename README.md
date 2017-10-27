# lb-f

A collection of functional programming functions

## Installation

`npm i lb-f`

## Usage

```
// ES5
const {curry} = require('lb-f')

// ES2016+
import {curry} from 'lb-f'

// create a standard function
const add = (a + b) => a + b

// wrap it in a curry
const sum = curry(add)

// now you can call argument by argument
sum(1, 2) // 3
sum(1)(2) // 3
```
