import { generateNumbers, filterModulo, arraySum } from '../src/euler.js';

it('should generate an array of numbers between 1 and 1000', function(){
  var testArray = generateNumbers(1000);
  expect(testArray[999]).toEqual(1000);
});

it('should generate an array of numbers between 1 and 1000 that are divisible by three or five', function(){
  var initialArray = generateNumbers(1000);
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

it('should return sum of all numbers between 1 and 1000 that are divisible by 3 or 5', function(){
  var initialArray = generateNumbers(10);
  var testArray = filterModulo(initialArray);
  var sum = arraySum(testArray);
  expect(sum).toEqual(33);
});
