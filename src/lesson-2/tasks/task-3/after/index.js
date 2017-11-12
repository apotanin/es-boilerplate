export function format(str) {
    return `\\u${str.charCodeAt(0).toString(16)}\\u${str.charCodeAt(1).toString(16)}`
}
