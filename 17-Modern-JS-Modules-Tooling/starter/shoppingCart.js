//Exporting module
console.log('exporting module');


// //Blocking code
// console.log('Start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finish fetching the users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`)
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qt};

export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`)
};