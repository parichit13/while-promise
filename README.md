# while-promise

while-promise is an Asynchronous while loop solution for bluebird Promises.

## Installation

You need Gulp installed globally:

```sh
$ npm install while-promises --save
```

## Usage

```js
var Promise = require('bluebird')
// May use some other Promises package other than bluebird
var promiseWhile = require('while-promise')(Promise)

promiseWhile(
  function() {
    return true // infinite loop
  }, 
  function() {
    // return Promise
  }
)
.then(function() {
  // while loop completed, conditional returned false
})
```

## Tests

```shell
   npm test
```

## Development

Based on promise-while library from @stevenzeiler. Added improvements over tick method.
Just an open source experiement to help others stuck at this problem.

## Release History

* 1.0.0 Initial release