# lazymd5
Generates md5 + salt. No dependencies.
Guarantee object's property order.
Can accept object, string, anything(cast to string);

Example usage:
``` javascript
let md5 = require('lazymd5')

let data = { a: 1, b: 2}

let hash = md5(data, "ololol")
data.md5 = hash

```


Passing in string or anything else:
``` javascript
md5("5", "salty") === md5(5, "salty") // true
```


Salt is optional argument. This will still work (but is recommended to pass salt):
``` javascript
let md5 = require('lazymd5')

let data = { a: 1, b: 2}

let hash = md5(data)
data.md5 = hash
```


# Advanced (for mapping)
## If passed object:
- create Map
- sort keys of Object
- push sorted keys' values to Map
- add Salt to Map, if exists
- create md5 of Map object

## If passed string:
- create copy
- concatenate with salt
- create md5

## If passed anything else:
- warning is being produced
- casted to string
- create copy
- concatenate with salt
- create md5
