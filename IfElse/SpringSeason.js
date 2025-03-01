const day = parseInt(process.argv[2]);  // Read day from command line
const month = parseInt(process.argv[3]); // Read month from command line

function SpringSeason(day, month) {
    if (month === 3 && day >= 20) return true;  // March 20 or later
    if (month > 3 && month < 6) return true;    // April and May (full months)
    if (month === 6 && day <= 20) return true;  // June 20 or earlier
    return false;
}

console.log(SpringSeason(day, month));
