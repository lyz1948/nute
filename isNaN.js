function isNaN(n) {
	if(!number.isNaN) {
	  number.isNaN = function(n) {
	    return n !== n
	  }
	}
}

module.exports = isNaN