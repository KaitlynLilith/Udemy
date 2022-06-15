// Importing Module
console.log('Importing Module');
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

import * as ShoppingCart from './shoppingCart.js';
import cloneDeep from 'lodash-es';

import 'core-js/stable';

import 'regenerator-runtime/runtime';
// ShoppingCart.addToCart('bread', 5);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('soda', 6);
// add('cheese', 1);

// console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// async function getLastPost() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// }

// const lastPost = await getLastPost();

if (module.hot) {
  module.hot.accept();
}
