function deepClone(values) {
	var copy

	if(null == values || 'object' != typeof values) return values
	// Date
	if(values instanceof Date) {
		copy = new Date()
		copy.setTime(values.getTime())
		return copy
	}
	// Array 
	if (values instanceof Array) {
		copy = []
		for (var i = 0; i < values.length; i++) {
			copy[i] = deepClone(values[i])
		}
		return copy
	}
	// Object 
	if (values instanceof Object) {
		copy = {}
		for (var attr in values) {
			if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr])
		}
		return copy 
	}
	throw new Error('Unable to copy values!')
}

module.exports = deepClone