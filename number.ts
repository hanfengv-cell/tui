/**
 * 获取整数部分
 */
export function getNumberInteger(x: number) {
  x = Number(x)
  return x < 0 ? Math.ceil(x) : Math.floor(x)
}

/**
 * 获取小数部分
 */
export function getNumberDecimal(x: number) {
  x = Number(x)
  return x % 1
}
