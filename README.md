# lazymd5
Generates md5. More secure than usual md5 method, because of salt usage. No dependencies.

Can accept object, string, anything(cast to string).

If used with object - the library can guarantee the objects properties order.

p.s.: usual object cannot guarantee the order of the properties.


# Install
```
npm install --save lazymd5
```

# Test
```
npm test
```

# Usage
Example usage:
``` javascript
const md5 = require('lazymd5')

const hash = md5({
  salt : "ololo",
  data : { a: 1, b: 2}
})
```


Passing in string or anything else:
``` javascript
md5({ salt : "salty", data : "5"}) === md5({ salt : "salty", data : 5 }) // true
```


Salt is optional argument. This will still work (but is recommended to pass salt):
``` javascript
const md5 = require('lazymd5')

const hash = md5({data : { a: 1, b: 2}})
```

# Options object:
- data - required. Iterable || Object || String || Anything else(being casted to string)
- salt - optional, but highly recommended

## Iterables
Any objects that implement iterators (Arrays too). The return value of operating with iterables will be array of objects:
- value - initial data or casted to string
- md5 - hash

# Advanced (for mapping)
## If passed iterable object:
- we pull values and for each perform the correct algorithm

## If passed object:
- create Map
- sort keys of Object
- push sorted keys' values to Map
- add Salt to Map, if provided
- create md5 of Map object

## If passed string:
- create copy
- concatenate with salt, if provided
- create md5

## If passed anything else:
- warning is being produced
- casted to string
- create copy
- concatenate with salt, if provided
- create md5
