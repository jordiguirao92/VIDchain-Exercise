//ACCUMULATE

let square = function(a, b) {return a * b};
let sum = function(a, b) {return a + b};
let subtraction = function(a, b) {return a - b};
let division = function(a, b) {return a / b}


function accumulateOperation(arrayNumbers, operation) {
  if(Array.isArray(arrayNumbers) && arrayNumbers.length > 0){
    for(i=0; i < arrayNumbers.length; i+=1){
      if(typeof arrayNumbers[i] === 'number'){
        arrayNumbers[i] = operation(arrayNumbers[i], arrayNumbers[i]);
      } else {
        return 'Incorrect data type, introduce only numbers' 
      } 
    }
    return arrayNumbers;
  } else {
    return 'Introduce an array of numbers'
  }
}

module.exports = {square, sum, subtraction, division, accumulateOperation}