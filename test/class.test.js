describe('ClassName API test:', function() {
	describe('#addClass', function() {
		let $el = null
		before(function() {
			let div = document.createElement('div')
			div.id = 'J_addClass'
			document.body.appendChild(div)
			$el = document.querySelector('#J_addClass')
		})
		it(`nute.addClass($el, 'test') should be return true`, function() {
			nute.addClass($el, 'test')
			assert(nute.hasClass($el, 'test'))
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
			nute.addClass($el, 'test')
		})
		it(`nute.hasClass($el, 'test'), should be return true`, function() {
			assert(nute.hasClass($el, 'test'))
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
			nute.addClass($el, 'test')
		})
		it(`nute.delClass($el, 'test') should be return false`, function() {
			nute.delClass($el, 'test')
			assert.notEqual(nute.hasClass($el, 'test'))
		})
		after(function() {
			document.body.removeChild($el)
		})
	})
})