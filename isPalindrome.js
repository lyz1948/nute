function isPalindrome(str) {
	if(str.length <= 1) {
		return true
	}
	if(str.charAt(0) != str.charAt(str.length -1)) return false
	return isPalindrome(str.substr(1, str.length -2))
}

module.exports = isPalindrome