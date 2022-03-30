// arrow function with one parameter 
const dividing5 = (number) => number / 5;
console.log(dividing5(50))

// arrow function with two parameter then multiply
const multiply = (num1, num2) => num1 * num2;
const multiplyNumber1 = 10;
const multiplyNumber2 = 10;
console.log(multiply(multiplyNumber1, multiplyNumber2))

// three parameter will mulitply all parameter 
const mulitply3 = (num1, num2, num3) => {
    const sum = num1 + num2;
    const subtration = num1 - num3;
    const multiply = sum * subtration;
    return multiply;
}
console.log(mulitply3(30, 20, 10))