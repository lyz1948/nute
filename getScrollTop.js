function getScrollTop() {
	return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}

module.exports = getScrollTop