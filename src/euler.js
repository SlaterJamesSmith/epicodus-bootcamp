export function generateNumbers(){
  var generatedArray = [];
  for (var i = 1; i < 1001; i++) {
    generatedArray.push(i);
  }
  return generatedArray;
}

export function filterModuloThree(array) {
  var generatedArray = [];
  array.forEach(function(element) {
    if (element % 3 === 0) {
      generatedArray.push(element);
    }
  });
  return generatedArray;
}
