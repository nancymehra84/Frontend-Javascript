// Check if an argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node harmonicNumber.js <n>");
    console.log("Example: node harmonicNumber.js 5");
    process.exit(1);
  }
  
  // Read the command-line argument
  let n = parseInt(process.argv[2]);
  
  // Validate input
  if (isNaN(n) || n <= 0) {
    console.log("Error: Please enter a valid positive integer.");
    process.exit(1);
  }
  
  // Calculate the nth Harmonic Number
  let harmonicNumber = 0;
  for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }
  
  console.log(`The ${n}th Harmonic Number is: ${harmonicNumber.toFixed(6)}`);
  