// array of numbers then map to get each number multiply 5 

const numbers = [10, 20, 5, 25, 17, 45, 47, 59, 580, 40];
const multiply5 = numbers.map(number => number * 5);
// console.log(multiply5)

// array of numbers then map to get each number dividing by 5 
const dividing5 = numbers.map(number => number / 5);
// console.log(dividing5)

//  numbers of array to get odd number 
const getOddNumbers = numbers.filter(number => number % 2 === 1)
console.log(getOddNumbers)

const getEvenNumbers = numbers.filter(number => number % 2 != 1)
console.log(getEvenNumbers)