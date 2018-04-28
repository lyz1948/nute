var toDouble = require('./toDouble')

function formatCustomDate(date, fmt) {
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
  	'M+': date.getMounth() + 1,
  	'd+': date.getDate(),
  	'h+': date.getHours(),
  	'm+': date.getMinutes(),
  	's+': date.getSeconds()
  }
  for(var k in o) {
  	if(new RegExp('+ k +').test(fmt)) {
  		let str = o[k] + ''
  		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : toDouble(str))
  	}
  }
  return fmt 
}

module.exports = formatCustomDate