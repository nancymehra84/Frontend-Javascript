function getPlaceValue(number) {
    const placeValues = {
        1: "unit",
        10: "ten",
        100: "hundred",
        1000: "thousand",
        10000: "ten thousand",
        100000: "hundred thousand",
        1000000: "million",
        10000000: "ten million",
        100000000: "hundred million",
        1000000000: "billion"
    };

    if (placeValues.hasOwnProperty(number)) {
        return placeValues[number];
    } else {
        return "Input is not a recognized place value.";
    }
}

console.log(getPlaceValue(1));       
console.log(getPlaceValue(10));      
console.log(getPlaceValue(100));     
console.log(getPlaceValue(1000));    
console.log(getPlaceValue(500));     
