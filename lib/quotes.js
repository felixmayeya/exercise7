module.exports = function (str) {
  // TODO
  // var s = str.match(/"[a-z\s]*"/g)
  var s = str.match(/"[^"]*"/g)
  return s ? s : null
}