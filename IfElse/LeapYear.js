const year = parseInt(process.argv[2]); 

function LeapYear(year) {
    if (year < 1000 || year > 9999) {
        return "Please enter a 4-digit year.";
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        ? "Leap Year"
        : "Not a Leap Year";
}

console.log(LeapYear(year));
