// array distructing
const numbers = [5, 3, 4, 4];
const [num1, num2, num3, num4] = numbers;
// console.log(num1, num2, num3, num4)

// spread operator 
const number1 = [2, 5, 1, 4, 5]
const number2 = [10, 15, 11, 14, 15]
const total = [...number1, ...number2]
console.log(total)

// object distructing 
const student = {
    name: 'Abul',
    role: 101,
    address: 'Dhaka',
    anotherInfo: {
        isGood: true,
        haveGrirlFriend: false
    }
}
const { name, role, address } = student;
const { isGood, haveGrirlFriend } = student.anotherInfo;
console.log(`My name is: ${name}. Role: ${role}, Address: ${address}. I am honest: ${isGood}, I have a girl friend: ${haveGrirlFriend}`)