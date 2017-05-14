//

function main(){
  var maxPalindrome = 0;
  for (var i = 100; i <1000; i++) {
    for (var j = 100; j < 1000; j++){
      var product = i * j;
      var str = product.toString();
      var bool = isPalindrome(str);
      if (bool && product > maxPalindrome) {
        maxPalindrome = product;
      }
    }
  }
  console.log(maxPalindrome);
}

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  if (str[0] !== str[str.length-1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1)); // using recursion
}

main();
