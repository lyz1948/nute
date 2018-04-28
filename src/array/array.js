var isNaN = require('../polyfill/isNaN')
/**
 * 数组方法的封装
 */

function Array() {}

/**
 * 删除数组的元素
 * @param    {val} 要删除的值
 * @return   {[arr]} 删除后的arr
 */
Array.prototype.remove = function(val) {
	if(val != null && this.length > 0) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == val) {
				this.splice(i, 1)
				break
			}
		}
	}
}

/**
 * 删除指定索引处元素
 * @param    {index} 数组的索引
 * @return   {[arr]} 删除后的新数组
 */
Array.prototype.del = function (idx) {
	if(isNaN(idx) || idx > this.length || idx < 0) {
		return this
	}
	else {
		this.splice(idx, 1)
	}
} 

/**
 * 向数组末尾追加一个元素
 * @param    {val} 添加的值
 * @return   {[arr]} 添加值后的新数组
 */
Array.prototype.add = function(val) {
	if(val ！= null) {
		return this.push(val)
	}
}

/**
 * @return   {[]} 空数组
 */
Array.prototype.clear = function() {
	return this.splice(0, this.length)
}

/**
 * @param    {数组中要交换的元素的下标}
 * @param    {数组中要交换的另外一个元素的下标}
 * @return   {[arr]} 交换位置后的数组
 */
Array.prototype.swap = function(idx1, idx2) {
	if(idx1 < this.length && idx2 < this.length && idx1 >=0 && idx2 >= 0){
		return this[idx1] = this.splice(idx2, 1, this[idx1])[0]
	}
}
/**
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @return {boolean}
 */
Array.prototype.equals(arr1, arr2) {
	if(arr1 === arr2) return true
	if(arr1.length != arr2.length) return false
	for(var i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) return false
	}
	return true
}
/**
 * @param  {number} 下标
 * @return {Array}
 */
Array.prototype.up = function(idx) {
	if(idx != null && idx >= 0 && idx < this.length) {
		if(idx == 0) {
			return 
		}
		this.swap(idx, idx -1)
	}
}
/**
 * @param  {Number}
 * @return {Array}
 */
Array.prototype.down = function(idx) {
	if(idx != null && idx > 0 && idx < this.length) {
		if(idx == this.length -1) {
			return
		}
		this.swap(idx, idx + 1)
	}
}

Array.prototype.head = function(idx) {
	if(idx != null && idx >= 0 && idx < this.length) {
		if(idx == 0) {
			return 
		}
		this.swap(idx, 0)
	}
}

Array.prototype.tail = function(idx) {
	if(idx != null && idx >= 0 && idx < this.length) {
		if(idx == this.length -1) {
			return
		}
		this.swap(idx, this.length -1)
	}
}

Array.prototype.find = function(val) {
	if(this.length > 0) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == val) {
				return i
			}
		}
	}
}

module.exports = Array