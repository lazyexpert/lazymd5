"use strict"

const types = require('./types')

function* iteratee(iterable) {
  for(let val of iterable)
    yield val
}

module.exports = function(options) {
  const gen = new iteratee(options.data)
  const values = []
  const result = []

  for(let value of gen)
    values.push(value)

  values.forEach(val => {
    result.push({
      value : val,
      md5 : types({data : val, salt : options.salt})
    })
  })

  if(options.success)
    options.success(result)

  return result
}
