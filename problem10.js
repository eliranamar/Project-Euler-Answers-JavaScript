function checkPrime(num) {
    if (num % 2 === 0) {
        return (num === 2)
    }
    var limit = Math.round(Math.sqrt(num));
    for (var i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrime(num) {
    var sum = 2;
    for (var i = 3; i <= num; i += 2) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrime(2000000));
