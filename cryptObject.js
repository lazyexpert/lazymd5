"use strict"

const crypt = require('./crypt')

module.exports = function cryptObject(options) {

  const copy = new Map()
  const keys = Object.keys(options.data)

  keys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .forEach(key => copy[key] = options.data[key])

  if( typeof options.salt !== "undefined" )
    copy.salt = options.salt

  return crypt(JSON.stringify(copy))
}
