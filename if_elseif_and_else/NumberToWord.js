function numberToWord(number) {
    const numberWords = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };

    if (numberWords.hasOwnProperty(number)) {
        return numberWords[number];
    } else {
        return "Input is not a single-digit number.";
    }
}

console.log(numberToWord(5)); 
console.log(numberToWord(10));