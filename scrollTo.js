var getScrollTop = require('./getScrollTop')
var setScrollTop = require('./setScrollTop')

var requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60)
		}
})()

function scrollTo(to, duration) {
	if (duration < 0) {
		setScrollTop(to)
		return
	}
	var diff = to - getScrollTop()
	if (diff === 0) return
	var step = diff / duration * 10
	requestAnimationFrame(
		function() {
			if(Math.abs(step) > Math.abs(diff)) {
			setScrollTop(getScrollTop() + diff)
			return 
		}
		setScrollTop(getScrollTop() + step)
		if(diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
			return 
		}
		scrollTo(to, duration - 16)
	})
}

module.exports = scrollTo