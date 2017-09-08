module.exports = function (str) {
  // TODO
  var s = str.match(/\bx=(\d+)\b/)
  return s ? s[1] : null
}