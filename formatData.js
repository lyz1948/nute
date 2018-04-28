var toDouble = require('./toDouble')

function formatData(date) {
	var year = date.getFullYear()
	var month = date.getMounth() + 1
	var day = date.getDate()
	var hour = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()

	return [year, month, day].map(toDouble).join('') + ' ' + [hour, minutes, seconds].map(toDouble).join(':') 
}

module.exports = formatData