function checkPrime(num) {
    if (num % 2 === 0 ) {
        return (num === 2)
    }
    var limit = Math.round(Math.sqrt(num));
    for (var i = 3; i <= limit; i+=2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrime(num) {
    var primes = [], i = 1;
    while (primes.length < num) {
        if (checkPrime(i)) {
            primes.push(i);
        }
        i += 2;
    }
    console.log(primes[num-1]);
}
findPrime(10001);
