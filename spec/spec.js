import { generateNumbers } from '../src/euler.js';

it('should generate an array of numbers between 1 and 1000', function(){
  var testArray = generateNumbers();
  expect(testArray[999]).toEqual(1000);
});

it('should generate an array of numbers between 1 and 1000 that are divisible by three', function(){
  var testArray = generateNumbers();
  var arraySum = 0;
  testArray.forEach(function(element) {
    arraySum += element;
  });
  expect(arraySum % 3).toEqual(0);
});
