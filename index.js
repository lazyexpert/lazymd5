'use strict'

var crypto = require('crypto')

function cryptObject(data, salt) {
  let copy = new Map()
  let keys = Object.keys(data)

  keys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .forEach(key => copy[key] = data[key])

  if( typeof salt !== "undefined" )
    copy.salt = salt

  return crypt(JSON.stringify(copy))
}

function crypt(data) {
  return crypto.createHash('md5').update(data).digest("hex")
}

function cryptString(data, salt) {
  let copy = data
  if( typeof salt !== "undefined" )
    copy += salt
  return crypt(copy)
}

module.exports = function(data, salt) {
  if( typeof data === 'object' )
    return cryptObject(data, salt)
  else if(typeof data === "string")
    return cryptString(data, salt)
  else {
    console.info("Argument type is not correct. Mapped to string.")
    return cryptString(data.toString(), salt)
  }
}
