exports.countIf = function (testFunc, arr) {
  return arr.reduce(function (count, elem) {
    if (testFunc(elem)) {
      return count + 1 
    } else {
      return count
    }
  }, 0)
}

exports.filter = function (func, arr) {
  var filteredArr = []
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr
}

exports.map = function  (func, arr) {
  var mappedArr = []
  for (var i = 0; i < arr.length; i++) {
    mappedArr.push(func(arr[i]))
  }
  return mappedArr
}
