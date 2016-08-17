"use strict"

let md5 = require('./index')

describe('Passing iterables', function() {
  it('array of integers', function() {
    let data = [1]
    let res = md5({ data : data })
    let res2 = md5({ data : 1 })

    console.assert(res[0].md5 === res2)
  })

  it('array of strings', function() {
    let data = ["hello", "world"]
    let res = md5({data : data})
    let res2 = md5({data: "hello"})

    console.assert(res[0].md5, res2)
  })

  it('iterable object', function() {
    const myIterable = {}
    myIterable[Symbol.iterator] = function* () {
      yield 1
      yield 2
      yield 3
    }

    let res = md5({data : myIterable})
    console.log(res)

  })
})

describe('Passing object', function() {
  it('result should be equal ', function() {
    let data = {a: 1, b: 2}
    let res = md5({data : data})
    let res2 = md5({data : data})
    console.assert(res === res2)
  })
})


describe('Passing string', function() {
  it('result should be equal', function() {
    let data = "Hello world!"

    let res = md5({data : data})
    let res2 = md5({data : data})

    console.assert(res === res2)
  })
})

describe('Passing wrong type', function(){
  it('should map to string', function() {
    let old = console.info
    let response = ""
    console.info = data => response = data
    md5({data : 5})
    console.info = old

    console.assert(typeof(response) === "string")
  })

  it('results should be equal', function() {
    let old = console.info
    let response = ""
    let response2 = ""
    console.info = data => response = data
    md5({data:5})
    console.info = data => response2 = data
    md5({data:"5"})
    console.info = old

    console.assert(response === response2)
  })
})
