export function generateNumbers(number){
  var generatedArray = [];
  for (var i = 1; i <= number; i++) {
    generatedArray.push(i);
  }
  return generatedArray;
}

export function filterModulo(array) {
  var generatedArray = [];
  array.forEach(function(element) {
    if (element % 3 === 0 || element % 5 === 0) {
      generatedArray.push(element);
    }
  });
  return generatedArray;
}

export function arraySum(array) {
  var sum = 0;
  array.forEach(function(element) {
    sum += element;
  });
  return sum;
}
