var setCookie = require('./setCookie')

function delCookie(name) {
	setCookie(name, '1', -1)
}

module.exports = delCookie