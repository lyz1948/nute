function setCookie(name, content, days) {
	var date = new Date()
	date.setDate(date.getDate() + days)
	document.cookie = name + '=' + content + ';expires=' + date
}

module.exports = setCookie