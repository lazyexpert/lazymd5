'use strict'

const utils = require('./utils')
const iterables = require('./iterables')
const types = require('./types')

module.exports = function(options) {
  if(!options.data)
    return console.error("Sorry no data provided")

  if( utils.isIterable(options.data) )
    return iterables(options)
  else
  return types(options)
}
