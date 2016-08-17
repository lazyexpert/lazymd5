"use strict"

const crypto = require('crypto')

module.exports = function crypt(data) {
  return crypto.createHash('md5').update(data).digest("hex")
}
