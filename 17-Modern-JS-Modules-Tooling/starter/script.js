//Importing module
/*
import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
addToCart('bread', 5);
console.log(price, qt);
console.log('importing module');


import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
console.log(price, qt);

*/
import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);

console.log(cart)
/*
//Blocking effect of top level await
console.log('start fetching');
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
console.log('soomething');


const getLastPost = async function(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  // console.log(data);

  return {title: data.at(-1).title, text: data.at(-1).body}
}
const lastPost = getLastPost();

//Not clean
// getLastPost().then(post => console.log(post));

//Clean top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

//Module pattern
const ShoppingCart2 = (function(){
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`)
};
  const orderStock = function(product, quantity){
    console.log(`${quantity} ${product} ordered from supplier`)
  };

  return {
    addToCart, 
    cart, 
    totalPrice, 
    totalQuantity,
  }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);

//Export
export.addToCart = function(product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`);
};

//Import 
const {addToCart} = require('./shoppingCart.js');
*/
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,

    },
    {
      product: 'pizza',
      quantity: 5,
    }
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if(module.hot){
  module.hot.accept();
}

class Person {
  greeting = 'Hey'
  constructor(name){
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

const inCart = cart.find(el => el.quantity >= 2);
console.log(inCart);

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find.js';

//Polifilling async functions
import 'regenerator-runtime/runtime.js';