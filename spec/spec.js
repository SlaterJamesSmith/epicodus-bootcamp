import { generateNumbers, filterModulo } from '../src/euler.js';

it('should generate an array of numbers between 1 and 1000', function(){
  var testArray = generateNumbers();
  expect(testArray[999]).toEqual(1000);
});

it('should generate an array of numbers between 1 and 1000 that are divisible by three or five', function(){
  var initialArray = generateNumbers();
  var testArray = filterModulo(initialArray);
  var divisible;
  testArray.forEach(function(element) {
    if (element % 3 === 0 || element % 5 === 0) {
      divisible = true;
    } else {
      divisible = false;
    }
  });
  expect(divisible).toEqual(true);
});
