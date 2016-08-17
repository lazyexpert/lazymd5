"use strict"

const utils = require('./utils')
const cryptObject = require('./cryptObject')
const cryptString = require('./cryptString')

module.exports = function(options) {
  if(utils.isObject(options.data))
    return cryptObject(options)
  else if(utils.isString(options.data))
    return cryptString(options)
  else
    return cryptString( {
      data : options.data.toString(),
      salt : options.data.salt
    })

}
