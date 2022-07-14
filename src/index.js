const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrayLetter = [];
    for (let i = 0; i < expr.length; i += 10) {
        let item = expr.slice(i, i + 10);
        arrayLetter.push(item);
    }

    let arraySymbol = [];
    arrayLetter.forEach((value) => {
        let strSymbol = '';
        for (let i = 0; i < 10; i += 2) {
            let item = value.slice(i, i + 2);
            if (item === '10') {
                strSymbol += '.';
            } else if (item === '11') {
                strSymbol += '-';
            } else if (item === '00') {
                strSymbol += ''
            }
        }
        arraySymbol.push(strSymbol);
    })

    strTotal = arraySymbol.map((item) => {
        return MORSE_TABLE[item] || ' ';
    })

    return strTotal.join('');
}

module.exports = {
    decode
}