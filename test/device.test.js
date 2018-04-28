describe('Device API test:', function() {
	describe('#getExplore()', function() {
		it(`ynuts.getExplore() should be return "google Chrome"`, function() {
			console.log(`Explore: ${ynuts.getExplore()}`)
			assert(/^Chrome:/.test(ynuts.getExplore()))
		})
	})
	describe('#getOS', function() {
		it(`ynuts.getOS() should be return "OS:MacOSX"`, function() {
			console.log(`OS:${ynuts.getOS()}`)
			assert(ynuts.getOS() === 'windows' || ynuts.getOS() === 'MacOSX' || ynuts.getOS() === 'linux')
		})
	})
})