'use strict';
/*
// //DESTRUCTURING OBJECTS
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
//     );
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orederPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
//   },
//   orderPizza: function(mainIngrediend, ...otherIngredient){
//     console.log(mainIngrediend);
//     console.log(otherIngredient);
//   }
// };

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'LaPizza',
//   owner: 'Giovanni Rossi',
// };


// // //OR OPERATOR
// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests  ||= 10;
// // rest2.numGuests ||= 10;

// // //NULLISH assignment operator (null or undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;


// //AND assingment operator
// rest1.owner = rest1.owner && '<ANNONYMUS';
// rest2.owner = rest2.owner && '<ANNONYMUS>';
// rest1.numGuests &&= '<ANNONYMUS>';
// rest2.owner = '<ANNONYMUS>';

// console.log(rest1);
// console.log(rest2);


// // restaurant.numGuests = 0
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);


// //nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Pesti 99',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });
// // restaurant.orderDelivery({
// //   address: 'Pesti 9000',
// //   starterIndex: 1,
// // })

// // const {name, openingHours, categories} = restaurant;
// // // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags
// // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // //default values
// // const {menu = [], starterMenu: starters = [] } = restaurant;
// // // console.log(menu, starters);

// // //mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = {
// //   a: 23,
// //   b: 7,
// //   c: 14
// // };
// // // {a, b} = obj; //JS expects a code block
// // ({a, b} = obj);
// // // console.log(a, b);

// // //nested lobjects
// // const {fri: {open, close}} = openingHours;
// // console.log(open, close);
// // //const {fri: {open: o, close: c}} = openingHours;
// // //console.log(o, c);

// // //DESTRUCTURIG ARRAYS
// // //receive 2 return values of a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const[i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//second element is skipped, third element is SECOND(named)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // //hard coded shitty new array
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // //new array with spread(...) operator
// // const newArr = [1, 2, ...arr]; //expand this array with original elements
// // // console.log(newArr);

// // // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu)

// // //copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join 2 arrays or more
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // console.log(menu);
// // const str = 'Jonas';
// // const letters = [...str, ' ', 'S. '];
// // // console.log(letters);

// // //real world examp;e
// // const ingredients = [prompt('Let\'s make pasta! Ingredent 1?'),
// //   prompt('Ingredent 2?'),
// //   prompt('Ingredent 3?')];
// //   console.log(ingredients);
// //   restaurant.orederPasta(...ingredients);

// // //objects
// // const newRestaurant = {
// //   foundedIn: 1998,
// //   ...restaurant,
// //   founder: 'Giuseppe',
// // };
// // console.log(newRestaurant);
// // const restaurantCopy = {
// //   ...restaurant,
// // };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurant.name);
// // console.log(restaurantCopy.name);



// //DESTRUCTURING

// // //SPREAD, because of the RIGHT hand side of = 
// // const arrr = [1, 2, ...[3, 4]];


// // //REST, because of theLeft hand side 
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);


// // const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(pizza, Risotto, otherFood);


// // //Objects
// // const {sat,  ...weekdays} = restaurant.openingHours;
// // console.log(weekdays)

// //FUNCTIONS//REST ARGUMENTS

// // const add = function(...numbers){
// //   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }
//   console.log(sum)

// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('mush', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mush');


//------------||(OR)--------------------- SHORT CIRCUITS WHEN THE FIRST VALUE IS TRUE
//USE ANY DATA TYPE, RETURN ANY DATA TYPE, SHORT CIRCUITING
//&& and || operator

// console.log(3 || 'pityke');
// console.log('' || 'pityke');
// console.log(true || 0);
// console.log(undefined || null);


// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//---------&&(AND)------------------------SHORT CIRCUITS WHEN THE FIRST VALUE IS FALSE
// console.log(0 && 'pityke');
// console.log('hello' && 23 && null);

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mush, ', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mush ,', 'spinach');
*/

//1. coding challange
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);
//  //2.
//  const [gk, ...fieldPlayers] = players1;
// //  console.log(gk, fieldPlayers);
//  //3.
//  const allPlayers = [...players1, ...players2];
// //  console.log(allPlayers);
//  //4.
//  const players1Final = [...players1, 'Thiago', 'Couthino', 'Periscic'];
//  //5.
//  const {odds: {team1, x:draw, team2}} = game;
//  console.log(team1, draw, team2);
//  //6.
//  const printGoals = function(...players){
//   console.log(`${players.length} goals were scored`)
//  }
//  printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
//  printGoals('Lewandowski', 'Gnarby');
//  //7.
//  team1 < team2 && console.log('team 1 is more likely to win');
//  team1 > team2 && console.log('team 2 is more likely to win');


// for (const item of menu){
//   console.log(item);
// }
// for (const item of menu.entries()){
//   console.log(item);
// }
// console.log(menu.entries());
// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1} : ${el}`);
// }

// if(restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon);
// }

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open)

// //example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days){

//   //NULLISH COALESCING OPERATOR
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day}, we open at ${open}`)
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exists');

// //Arrays
// const users = [
//   {name: 'jonas', email:'hjelomnekinef'}
// ];
// console.log(users[0]?.name ?? 'user array is empty');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },
  orederPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngrediend, ...otherIngredient){
    console.log(mainIngrediend);
    console.log(otherIngredient);
  }
};


// //Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `

// for(const day of properties){
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// //[key, value]
// for(const [day, {open, close}] of entries){
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }

//codgin challange 2.
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// function scored(array){
//   let index = 0;
//   for(let i = 0; i < array.length; i++){
//     index++;
//     console.log(`Goal ${index}: ${array[i]}`)
//   }
// }
// console.log(scored(game.scored))

// for (const [i, player] of game.scored.entries()){
//   console.log(`Goal ${i +1}: ${player}`);
// }

//2.
// function average(array){
//   let sum = 0;
//   for(let i = 0; i < array.length; i++){
//     sum += array[i];
//   }
//   return sum / array.length;
// }
// console.log(average(Object.values(game.odds)));

//3.
// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`odd of ${teamStr} ${odd}`)
// }


// //NEW SET
// const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'rizotto', 'pasta', 'pizza']);
// console.log(ordersSet);

// console.log(new Set('Pityke'));

// console.log(ordersSet.size);

// //HAS check
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('garlic'));

// //ADD adding 
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');

// //DELETE
// ordersSet.delete('risotto');
// console.log(ordersSet);

// for (const order of ordersSet){
//   console.log(order);
// };

// //example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// //SPREAD OPERATOR CREATE A NEW ARRAY
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);
// //counting duplicates
// console.log(new Set('asdkjhaskjjkhfhhhfaghakjshd').size);


// MAP
// SET
// const rest = new Map();
//  rest.set('name', 'Classico Italiano');
//  rest.set(1, 'Firenze, Italy');
//  rest.set(2, 'Lisbon, Portugal');
//  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'we are open').set(false, 'we are closed');
// //  console.log(rest);

// //GET
// //  console.log(rest.get('name'));
// //  console.log(rest.get(true));

//  const time = 21;
//  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// //HAS
// console.log(rest.has('categoriesd'));

// //DELETE
// rest.delete(2);
// console.log(rest);

// //SIZE
// console.log(rest.size);

//CLEAR
// rest.clear();
// console.log(rest);


//these 2 array is not the same object in the heap
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2]));
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);

// rest.set(document.querySelector('h1'), 'Heading');

// const question = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);


// //CONVERT OBJECT TO MAP
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //MAP ARE ITERABLES
// console.log(question.get('question'));
// for (const [key, value] of question){
//   if(typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer ));

//CONVERT MAP TO ARRAY
// console.log(...question);
 // console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());


//coding challange3.
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1.
// const events = [...new Set(gameEvents.values())];
//2.
// gameEvents.delete(64);
//3.
// const time = [...gameEvents.keys()].pop();
// console.log(`an event happened, on average, every ${time / gameEvents.size} minutes`);
//4.
// for(const [key, value] of gameEvents){
//   if (key < 45){
//     console.log(`[1. half] things ${key} ${value}`)
//   } 
//   else if(key > 90) {
//     console.log(`[out of playtime] things ${key} ${value}`)
//   } else {
//     console.log(`[2. half] thing ${key} ${value}`)
//   }
// }

// for(const [min, event] of gameEvents){
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//STRINGS 
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);

// //strange
// console.log('B737'[0]);

// //string length
// console.log(airline.length);
// console.log('B737'.length);

// //Methods
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// //SLICE IS JUST SUBSTRING //MUTATED STRING
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));


// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// //minus number starts counting from the end
// console.log(airline.slice(-2));
// //minus cut off the last 
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat){
//   //B and E are the middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E'){
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //JS CONVERTS STRINGS TO AN OBJECT TO GET THE METHODS//BOXING
// console.log(new String('Pityke'));
// console.log(typeof new String('Pityke'));
// console.log(typeof new String('Pityke').slice(1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalisation in name 
// const passenger = 'pItyke'; //Pityke
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing e-mails
// const email = 'hali@pityke.io';
// const loginEmail = '  Hello@Pityke.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trimEnd();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replace part of strings$
// const priceGB = '288,97£';
// const priceUs = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUs);
// //replace create a new string 
// const announcement = 'All passangers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));

// //RegEx
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neoi')){
//   console.log('Part of a new aribus family');
// }


// //practice exercise
// const checkBaggage = function (items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knnife') || baggage.includes('gun')){
//     console.log('you are not allowed on board')
//   } else {
//     console.log('welcome on board')
//   }
// }
// checkBaggage('i have a laptop,some food and a pocket knife');
// checkBaggage('socks camera');
// checkBaggage('got some snacks and a gun for protection');

// //SPLIT
// //creates a new array
// console.log('a+very+nice+string'.split('+'));
// const [firtsName, lastName] = 'Balla Istvan'.split(' ');

// //JOIN
// const newName = ['Mr.', firtsName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];
//   for(const word of names){
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('jessica ann smith davis');
// capitalizeName('balla istvan');

// //Padding
// const message = 'go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Pityke'.padStart(23, '+'));
// //Padend
// console.log(message.padStart(20, '+').padEnd(30), '+');


// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// }
// console.log(maskCreditCard(3463282386748962));
// console.log(maskCreditCard('12387468321748'));

// //Repeat
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function(n){
//   console.log(`there are ${n} planes in line ${plane.repeat(n)}`)
// }
// planesInLine(4);
// planesInLine(12);

//coding challange 4.
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()){
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const outPut = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${outPut.padEnd(20)}${'!'.repeat(i + 1)}`)
//   }
// })

// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure


//String Practice
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCodce = str => str.slice(0, 3).toUpperCase();
for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const outPut = `${type.startsWith('_Delayed') ? '!!!' : ''}${type.replaceAll('_', ' ')} ${getCodce(from)} ${getCodce(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(outPut)
}