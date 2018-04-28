function urlParse() {
	var url = window.locatioin.search
	var obj = {}
	var re = /[?&][^?&]+=[^?&]+/g 
	var arr = url.match(re)
	if(arr) {
		arr.forEach(item, function() {
			var tempArr = item.substring(1).split('=')
			var key = decodeURIComponent(tempArr[0])
			var val = decodeURIComponent(tempArr[1])
			obj[key] = val 
		})
	}
	return obj
}

module.exports = urlParse