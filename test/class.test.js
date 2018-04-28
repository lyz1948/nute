describe('ClassName API test:', function() {
	describe('#addClass', function() {
		let $el = null
		before(function() {
			let div = document.createElement('div')
			div.id = 'J_addClass'
			document.body.appendChild(div)
			$el = document.querySelector('#J_addClass')
		})
		it(`ynuts.addClass($el, 'test') should be return true`, function() {
			ynuts.addClass($el, 'test')
			assert(ynuts.hasClass($el, 'test'))
		})
		after(function() {
			document.body.removeChild($el)
		})
	})

	describe('#hasClass', function() {
		let $el = null
		before(function() {
			let div = document.createElement('div')
			div.id = 'J_hasClass'
			document.body.appendChild(div)
			$el = document.querySelector('#J_hasClass')
			ynuts.addClass($el, 'test')
		})
		it(`ynuts.hasClass($el, 'test'), should be return true`, function() {
			assert(ynuts.hasClass($el, 'test'))
		})
		after(function() {
			document.body.removeChild($el)
		})
	})

	describe('#delClass', function() {
		let $el = null 
		before(function() {
			let div = document.createElement('div')
			div.id = 'J_delClass'
			document.body.appendChild(div)
			$el = document.querySelector('#J_delClass')
			ynuts.addClass($el, 'test')
		})
		it(`ynuts.delClass($el, 'test') should be return false`, function() {
			ynuts.delClass($el, 'test')
			assert.notEqual(ynuts.hasClass($el, 'test'))
		})
		after(function() {
			document.body.removeChild($el)
		})
	})
})