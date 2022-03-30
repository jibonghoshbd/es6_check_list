// array of object fint the price 5000 higher 
const products = [
    { name: "Nokia Phone", color: 'Black', quantity: 2, price: 7000 },
    { name: "head Phone", color: 'Yellow', quantity: 5, price: 1000 },
    { name: "Laptop", color: 'Black', quantity: 1, price: 50000 },
    { name: "Book", color: 'White', quantity: 2, price: 700 },
    { name: "Pen", color: 'Blue', quantity: 10, price: 50 },
    { name: "Tabel", color: 'Black', quantity: 50, price: 10000 }
];

const expensiveProduct = products.filter(product => product.price > 5000);
// console.log(expensiveProduct)


// cheapest product 

const cheapestProduct = products.filter(product => product.price < 5000);
console.log(cheapestProduct)