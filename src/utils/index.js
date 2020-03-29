/**
 * 角度转弧度
 * @param {角度} r 
 */
function radius2degrees(r) {
  return r * 180 / Math.PI
}

/**
 * 弧度转角度
 * @param {弧度} deg 
 */
function degrees2radius(deg) {
  return deg * Math.PI / 180
}
/**
 * 取值在最小与最大值范围内
 * @param {最小值} min 
 * @param {最大值} max 
 * @param {传入值} val 
 */
function minMax(min, max, val) {
  return Math.min(max, Math.max(min, val))
}

module.exports = {
  radius2degrees,
  degrees2radius,
  minMax,
}