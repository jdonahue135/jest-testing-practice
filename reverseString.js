function reverseString(str) {
    const chars = str.split('');
    let newArray = []
    for (let i = 0; i < str.length; i++) {
        newArray.unshift(chars[i])
    }
    return newArray.toString().replace(/,/g, '');
}

module.exports = reverseString;