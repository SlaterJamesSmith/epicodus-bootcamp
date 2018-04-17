export function generateNumbers(){
  var generatedArray = [];
  for (var i = 1; i < 1001; i++) {
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
