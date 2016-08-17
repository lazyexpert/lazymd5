"use strict"

module.exports = {

  isIterable :function(data) {
    return data == null || typeof data === "string" ?
      false : typeof data[Symbol.iterator] === 'function'
  },

  isObject: function(data) {
    return typeof data === "object"
  },

  isString: function(data) {
    return typeof data === "string"
  }

}
