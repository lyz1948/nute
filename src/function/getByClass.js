function getByClass(parent, cls) {
	var res = []
	var els = parent.getElementsByTagName('*')
	var re = new RegExp('\\b' + cls + '\\b')
	for(var i = 0; i < els.length; i++) {
		if(re.test(els[i].className)) {
			res.push(els[i])
		}
	}
	return res 
}

module.exports = getByClass