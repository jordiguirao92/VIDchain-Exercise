const {square, sum, subtraction, division, accumulateOperation} = require('../exercice2');

let OPERATIONS;
let NUMBERS_ARRAY;
const errorArrayMessage = 'Introduce an array of numbers';
const errorDataTypeMessage = 'Incorrect data type, introduce only numbers';

describe('ACCUMULATE TESTING', () => {

  beforeEach(() => {
    NUMBERS_ARRAY = [2,4,10,15];
    OPERATIONS = {
      square: [4,16,100,225],
      sum: [4,8,20,30],
      subtraction: [0,0,0,0],
      division: [1,1,1,1]
    } 
  })

  
  test('Introduce a number', () => {
    let noArray = 4;
    let result = accumulateOperation(noArray, square);
    expect(result).toBe(errorArrayMessage);
  })

  test('Introduce a string', () => {
    let string = 'hola';
    let result = accumulateOperation(string, square);
    expect(result).toBe(errorArrayMessage);
  })

  test('Introduce an empty array', () => {
    let emptyArray = [];
    let result = accumulateOperation(emptyArray, square);
    expect(result).toBe(errorArrayMessage);
  })

  test('Introduce an array of string', () => {
    let stringArray = ['a','b'];
    let result = accumulateOperation(stringArray, square);
    expect(result).toBe(errorDataTypeMessage);
  })

  test('Introduce an array of string and numbers', () => {
    let stringNumberArray = [3,'b'];
    let result = accumulateOperation(stringNumberArray, square);
    expect(result).toBe(errorDataTypeMessage);
  })

  test('Check square', () => {
    let result = accumulateOperation(NUMBERS_ARRAY, square);
    expect(result).toMatchObject(OPERATIONS.square);
  })

  test('Check sum', () => {
    let result = accumulateOperation(NUMBERS_ARRAY, sum);
    expect(result).toMatchObject(OPERATIONS.sum);
  })

  test('Check subtraction', () => {
    let result = accumulateOperation(NUMBERS_ARRAY, subtraction);
    expect(result).toMatchObject(OPERATIONS.subtraction);
  })

  test('Check division', () => {
    let result = accumulateOperation(NUMBERS_ARRAY, division);
    expect(result).toMatchObject(OPERATIONS.division);
  })
})