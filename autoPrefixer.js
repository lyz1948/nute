function autoPrefixer(obj, name, value) {
	obj.style['Webkit' + name.charAt(0).toUpperCase() + name.substring(1)] = value
	obj.style['Moz' + name.charAt(0).toUpperCase() + name.substring(1)] = value
	obj.style['ms' + name.charAt(0).toUpperCase() + name.substring(1)] = value
	obj.style['O' + name.charAt(0).toUpperCase() + name.substring(1)] = value
	obj.style[name] = value
}

module.exports = autoPrefixer