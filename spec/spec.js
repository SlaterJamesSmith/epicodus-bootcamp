import { generateNumbers } from '../src/euler.js';

it('should generate an array of numbers between 1 and 1000', function(){
  var testArray = generateNumbers();
  expect(testArray[999]).toEqual(1000);
});
