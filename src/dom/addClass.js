var hasClass = require('./hasClass.js')

function addClass(el, cls) {
	if(!hasClass(el, cls)) {
		el.className += ' ' + cls
	}
}

module.exports = addClass