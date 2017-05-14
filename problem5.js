 // disable infinite loop protection for this
function smallestDiv(){
  var smallest = 1;
  var found = false;
  var max = 20;

  while (!found) {
    for (var i = 1; i <= max; i++){
      if (smallest % i) {
        break;
      }
      if (i === max) {
        found = true;
        console.log(smallest);
      }
    }
    smallest++;
  }
}

smallestDiv();
