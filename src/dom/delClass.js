var hasClass = require('./hasClass')

function delClass(el, cls) {
	if(hasClass(el, cls)) {
		var re = new RegExp("(\\s|^)" + cls + "(\\s|$)")
		el.className = el.className.replace(re, '')
	}
}

module.exports = delClass