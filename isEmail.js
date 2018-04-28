function isEmail(str) {
	return /^[a-z0-9]+(\w|_)+@+([a-z0-9]){2,4}.[a-z]{2,4}$/.test(str)
}

module.exports = isEmail