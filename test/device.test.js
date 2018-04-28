describe('Device API test:', function() {
	describe('#getExplore()', function() {
		it(`nute.getExplore() should be return "google Chrome"`, function() {
			console.log(`Explore: ${nute.getExplore()}`)
			assert(/^Chrome:/.test(nute.getExplore()))
		})
	})
	describe('#getOS', function() {
		it(`nute.getOS() should be return "OS:MacOSX"`, function() {
			console.log(`OS:${nute.getOS()}`)
			assert(nute.getOS() === 'windows' || nute.getOS() === 'MacOSX' || nute.getOS() === 'linux')
		})
	})
})