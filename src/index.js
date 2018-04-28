// 导出方法
const hasClass = require('./dom/hasClass')
const addClass = require('./dom/addClass')
const delClass = require('./dom/delClass')
const getScrollTop = require('./dom/getScrollTop')
const setScrollTop = require('./dom/setScrollTop')
const scrollTo = require('./dom/scrollTo')
const getElements = require('./dom/getElements')
const getPosition = require('./dom/getPosition')
const getKeyName = require('./dom/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')
const randomStr = require('./random/randomStr')

const isPalindrome = require('./string/isPalindrome')
const urlParse = require('./url/urlParse')

const smallest = require('./size/smallest')
const largest = require('./size/largest')

const formatDate = require('./time/formatData')
const formatCustomDate = require('./time/formatCustomDate')
const formatPassTime = require('./time/formatPassTime')
const isSameDay = require('./time/isSameDay')

const isEmail = require('./regexp/isEmail')

const getCookie = require('./cookie/getCookie')
const setCookie = require('./cookie/setCookie')
const delCookie = require('./cookie/delCookie')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')

module.exports = {
  hasClass,
  addClass,
  delClass,
  getScrollTop,
  setScrollTop,
  scrollTo,
  getElements,
  getPosition,
  getKeyName,

  deepClone,
  isEmptyObject,
  randomColor,
  randomNum,
  randomStr,
  isPalindrome,
  urlParse,

  smallest,
  largest,

  getCookie,
  setCookie,
  delCookie,

  formatDate,
  formatCustomDate,
  formatPassTime,
  isSameDay,
  isEmail,
  getOS,
  getExplore
}