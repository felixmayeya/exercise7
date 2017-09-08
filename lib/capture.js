module.exports = function (str) {
  // TODO
 	// var s = str.match(/[a-z]=([0-9]+)/)
 	var s = str.match(/x=(\d+)/)
 	return s ? s[1] : null
 	// if(s===null) {
 	// 	return null
 	// } else {
 	// 	return s[1]
 	// }
}