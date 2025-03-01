function getRandomThreeDigits(){
    return Math.floor(Math.random()*(999-100+1))+100;
}

function findMinMax(){
    let number =Array.from({length: 5},getRandomThreeDigits);

    let min=Math.min(...number);
    let max=Math.max(...number);

    console.log("Generated Numbers:",number);
    console.log("Minimum Value:", min);
    console.log("Maximum Value:", max);
}

findMinMax();
