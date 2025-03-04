function findMaxMin(a, b, c) {
    let expr1 = a + b * c;
    let expr2 = a % b + c;
    let expr3 = c + a / b;
    let expr4 = a * b + c;
    
    let results = [expr1, expr2, expr3, expr4];
    
    let maxVal = Math.max(...results);
    let minVal = Math.min(...results);
    
    console.log("Results:", results);
    console.log("Maximum Value:", maxVal);
    console.log("Minimum Value:", minVal);
}

findMaxMin(5, 6, 7);
