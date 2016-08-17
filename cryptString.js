"use strict"

const crypt = require('./crypt')

module.exports  = function cryptString(options) {
  const copy = options.data
  if( typeof options.salt !== "undefined" )
    copy += options.salt
  return crypt(copy)
}
