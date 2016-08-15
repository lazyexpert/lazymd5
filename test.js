"use strict"

let md5 = require('./index')

describe('Passing object', function() {
  it('result should be equal ', function() {
    let data = {a: 1, b: 2}
    let res = md5(data)
    let res2 = md5(data)
    console.assert(res === res2)
  })
})


describe('Passing string', function() {
  it('result should be equal', function() {
    let data = "Hello world!"

    let res = md5(data)
    let res2 = md5(data)

    console.assert(res === res2)
  })
})

describe('Passing wrong type', function(){
  it('should produce warning', function() {
    let old = console.info
    let response = ""
    console.info = function(data) {
      response += data
    }
    md5(5)
    console.info = old
    console.assert("Argument type is not correct. Mapped to string." === response)
  })

  it('should map to string', function() {
    let old = console.info
    let response = ""
    console.info = function(data) {
      response += data
    }
    md5(5)
    console.info = old

    console.assert(typeof(response) === "string")
  })

  it('results should be equal', function() {
    let old = console.info
    let response = ""
    let response2 = ""
    console.info = function(data) {
      response += data
    }
    md5(5)
    console.info = function(data) {
      response2 += data
    }
    md5(5)
    console.info = old

    console.assert(response === response2)
  })
})
