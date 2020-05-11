const caesar = function(str, n) {
    var key = n%26;

    if (key < 0) {
        key = key + 26;
    }

    var arrayStr = str.split('');

    var cypher = '';

    for (var x = 0; x < arrayStr.length; x++) {
        // Convert letters to ASCII code
        var charCode = arrayStr[x].charCodeAt(0);

        //Determine if char is a lowercase
        if (charCode > 96 && charCode < 123) {
            charCode = charCode + key;

            if (charCode > 122) {
                charCode = charCode - 26;
            }
        }
        if (charCode > 64 && charCode < 91) {
            charCode = charCode + key;

            if (charCode > 90) {
                charCode = charCode - 26;
            }
        }
        var char = String.fromCharCode(charCode);
        cypher = cypher + char;
    }
    return cypher;
}

module.exports = caesar
