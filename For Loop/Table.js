
if (process.argv.length < 3) {
    console.log("Usage: node powersOf2.js <n>");
    console.log("Example: node powersOf2.js 5");
    process.exit(1);
  }
  
  let n = parseInt(process.argv[2]);
  
  if (isNaN(n) || n < 0) {
    console.log("Error: Please enter a valid non-negative integer.");
    process.exit(1);
  }
  
  console.log(`Powers of 2 up to 2^${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
  