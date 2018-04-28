function getPhoneType(type) {
	switch(type) {
		case 'android': 
			return navigator.userAgent.toLowerCase().indexOf('android') !== -1
			break;
		case 'iphone': 
			return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
			break;
		case 'ipad': 
			return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
			break;
		case 'weixin': 
			return navigator.userAgent.toLowerCase().indexOf('weixin') !== -1
			break;
		default:
			return navigator.userAgent.toLowerCase()
	}
}

module.exports = getPhoneType