function getWeekDay(number) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (number >= 0 && number <= 6) {
        return daysOfWeek[number];
    } else {
        return "Invalid input. Please enter a number between 0 and 6.";
    }
}

console.log(getWeekDay(0));
console.log(getWeekDay(3)); 
console.log(getWeekDay(6));
console.log(getWeekDay(7));
