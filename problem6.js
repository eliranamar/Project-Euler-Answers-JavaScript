//
function sumDiff(num) {
    var sumSquare = 0, squareSum = 0, count = 0;
    
    while (count < num) {
        count++;
        sumSquare += count*count;
    }
    count = 0;
    while (count < num) {
        count++;
        squareSum += count;
    }
    squareSum *= squareSum;
    console.log(squareSum - sumSquare)
}
sumDiff(100);