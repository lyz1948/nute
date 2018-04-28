describe('Time API:', function() {
	describe('#formatPassTime', function() {
		it(`nute.formatPassTime(new Date().getTime() - 5000) === '"刚刚"' should  be return true`, function() {
			let time = new Date().getTime() - 5000
			assert(nute.formatPassTime(time) === '刚刚')
		})
		it(`nute.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should  be return true`, function() {
			let time = new Date().getTime() - 70000
			assert(nute.formatPassTime(time) === '1分钟前')
		})
		it(`nute.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should  be return true`, function() {
			let time = new Date().getTime() - 70000 * 60
			assert(nute.formatPassTime(time) === '1小时前')
		})
		it(`nute.formatPassTime(new Date().getTime() - 70000 * 60 * 30) === '"1月前"' should  be return true`, function() {
			let time = new Date().getTime() - 70000 * 60 * 24 * 30
			assert(nute.formatPassTime(time) === '1月前')
		})
		it(`nute.formatPassTime(new Date().getTime() - 70000 * 60 * 30 * 12) === '"1年前"' should  be return true`, function() {
			let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
			assert(nute.formatPassTime(time) === '1年前')
		})
	})

	describe('#isSameDay', function() {
		it(`nute.isSameDay(new Date()) should be return true`, function() {
			assert(nute.isSameDay(new Date()) === true)
		})
		it(`nute.isSameDay(new Date(), new Date().getTime() - 86400000) should be return false`, function() {
			assert(nute.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false)
		})
	})
})