import dayjs from 'dayjs'

/**
 * 时间格式化
 * @param format
 * @param date
 * @returns {*}
 */
function formatDate (val = '', format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(val).format(format)
}


/**
 * 小数点保护
 * @param number
 * @param len
 * @returns {number}
 */
export function numberToFixed(number = 0, len = 2) {
    const result = Number(Number(number).toFixed(len))
    if (isNaN(result)) {
        return 0
    }
    return result
}