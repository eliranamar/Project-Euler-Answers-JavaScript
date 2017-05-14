//
function comp(){
  var sum = 0;
  var x = 1; // first value
  var y = 2; // next value
  while (x <= 4000000) {
    if (x % 2 === 0) {
      sum += x;
    }
    temp = x + y;
    x = y;
    y = temp;
  }
  return sum;
}

comp();
