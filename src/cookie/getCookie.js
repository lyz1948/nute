function getCookie(name) {
	var cks = document.cookie.replace(/\s/g, '').split(';')
	for(var i = 0; i < cks.length; i++) {
		var tempArr = cks[i].split('=')
		if(tempArr[0] == name) {
			return decodeURIComponent(tempArr[1])
		}
		else {
			return ''
		}
	}
}

module.exports = getCookie