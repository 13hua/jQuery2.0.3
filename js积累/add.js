/**
 * js 累加  实现 add(1)(2)(3)
 */

function add(a) {
  var sum = a
  console.log('sum=', sum, 'a', a)
  function addMore(b) {
    sum += b
    return addMore
  }
  addMore.valueOf = () => sum

  return addMore
}

add(1)(2)(3)

function add(a) {
  function addMore(b) {
    return add(a + b)
  }
  addMore.valueOf = () => a
  return addMore
}

add(1)(2)(3)

var add = function (n) {
  const f = x => add(x + n)
  f.valueOf = () => n
  return f
}

add(1)(2)(3)

/**
 * js 继承
 */

function A(name) {
  this.name = name
}
A.prototype.getName = function () {
  console.log(this.name)
  return this.name
}

function B(name, age) {
  A.call(this, name)
  this.age = age
}

inheritPrototype(B, A)

/**
 * b 继承 a
 */
function inheritPrototype(b, a) {
  var prototype = Object(a.prototype)
  prototype.construct = b
  b.prototype = prototype
}