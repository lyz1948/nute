function formatPassTime(nowTiime) {
	var currentTime = (new Date()).getTime(),
			time = currentTime - nowTiime,
			day = parseInt(time / (1000 * 60 * 60 * 24), 10),
			hours = parseInt(time / (1000 * 60 * 60), 10),
			min = parseInt(time / (1000 * 60), 10),
			month = parseInt((day / 30), 10),
			year = parseInt((month / 12), 10)
	if(year) return year + '年前'
	if(month) return month + '月前'
	if(day) return day + '天前'
	if(hours) return hours + '小时前'
	if(min) return min + '分钟前'
	else return '刚刚'
}

module.exports = formatPassTime