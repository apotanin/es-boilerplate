export function findString(text, pattern) {
    return text.split(pattern).length-1;
}

// export function findString(text, pattern) {
//     let num = 0;
//     for (let i = 0; i < text.length; i++) {
//         pattern.lastIndex = i;
//         if (pattern.exec(text)) {
//             num++;
//             i = pattern.lastIndex - 1;
//         }
//     }
//     return num;
// }
