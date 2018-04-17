import { generateNumbers, filterModuloThree } from '../src/euler.js';

it('should generate an array of numbers between 1 and 1000', function(){
  var testArray = generateNumbers();
  expect(testArray[999]).toEqual(1000);
});

it('should generate an array of numbers between 1 and 1000 that are divisible by three', function(){
  var initialArray = generateNumbers();
  var testArray = filterModuloThree(initialArray);
  console.log(testArray);
  var divisibleByThree = true;
  testArray.forEach(function(element) {
    if (element % 3 !== 0) {
      divisibleByThree = false;
    }
  });
  expect(divisibleByThree).toEqual(true);
});
