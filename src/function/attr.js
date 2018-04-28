function attr(obj, name, value) {
	if(arguments.length == 2) {
		return obj[name] = value
	}
	else {
		return obj.style[name]
	}
}

module.exports = attr