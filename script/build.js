const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf.js')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
	let building = ora('building……')
	building.start()

	rm(path.resolve(__dirname, 'dist', `${pkg.name}.min.js`), err => {
		if (err) throw err 
		webpack(config, function(err, stats) {
			if(err) throw err 
			building.stop()
			process.stdout.write(stats.toString({
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}) + '\n\n')
			resolve()
			console.log(chalk.cyan(' Build complete.\n'))
		})
	})
}).then(() => {
	let copying = ora('copying……')
	copying.start()
	rm('*.js', err => {
		if(err) throw err
		let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
		folderList.forEach((item, index) => {
			copy(`src/${item}/*.js`, rootPath, function(err, file) {
				if(err) throw err 
				if(index === folderList.length -1) {
					console.log(chalk.cyan(' Copy complete.\n'))
					copying.stop()
				}
			})
		})
	})
}).catch(err => {
	if(err) throw err 
})