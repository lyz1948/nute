function toDouble(str) {
	return ('00' + str).substr(str.length)
}

module.exports = toDouble