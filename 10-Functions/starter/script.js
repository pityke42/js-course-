'use strict';


// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){

//     //ES5 way
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     //ES6 solve  => you can specify value in the parameters

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// //to skip the second argument
// createBooking('LH123', undefined, 1000);

// const flight = 'LH123';
// const pityke = {
//     name: 'Balla Istvan',
//     passport: 11222233311,

// }

// const checkIn = function(flightNum, passenger){
//     //change parameters//this variable not get reflected in the ouside flight variable
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 11222233311){
//         alert('check in');
//     } else {
//         alert('wrong passport');
//     }
// }
// checkIn(flight, pityke);
// console.log(flight);
// console.log(pityke);

//is the same as doing...//passing a primitive type to a function same as creating a copy outside a function//value is simply copied
// const flightNum = flight;
// const passenger = pityke;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000000);
// }
// newPassport(pityke);
// checkIn(flight, pityke);
//in JS there is no pass reference// just pass by value

// //generic function
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first, ...others]= str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //higher order function
// const trasnformer = function(str, fn){
//     console.log(`original string : ${str}`)
//     console.log(`transformed string : ${fn(str)}`)

//     console.log(`transformed by : ${fn.name}`)
// }
// trasnformer('js is the best !', upperFirstWord);
// trasnformer('js is the best !', oneWord);


// //js uses callbacks all the time
// const high5 = function(){
//     console.log('!!!');

// }
// document.body.addEventListener('click', high5);

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }
// const greeterHey = greet('Hey');
// greeterHey('Pityke');

// greet('hello')('Pityke')

// //Challange
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('hi')('pityke')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     //book: function(){}
//     book(flightNumber, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
//     },
// }

// lufthansa.book(239, 'Balla Istvan');
// lufthansa.book(635, 'Mike Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Euro Wings',
//     iataCode: 'EW',
//     bookings: [],

// };

// const book = lufthansa.book;

// //does not work
// //book(23, 'Sarah williams);


// //call method
// book.call(eurowings, 23, 'Sarah Williams');//call method on book function with THIS keyword set to EUROWINGS in the first argument
// // console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// // console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };
// book.call(swiss, 587, 'Bolond Lajos');
// // console.log(swiss);


// //apply method
// const flightData = [738, 'George Cooper'];
// book.apply(swiss, flightData);
// // console.log(swiss);
// //call method with spread operator instead apply method
// book.call(swiss, ...flightData);
// // console.log(swiss);


// //bind method
// //book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// console.log(eurowings, swiss, lufthansa);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Balla Istvan');
// bookEW23('Martha Cooper');

// //with evenlisteners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){

//     this.planes++;
//     console.log(this.planes)
// };
// lufthansa.buyPlane()
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //addVAT = value => value +value * 0.23;
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function(rate){
//     return function(value){
//         return value + value * rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT(100));

//coding challange 1
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     registerNewAnswer: function(){

//         //get answer
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

//         console.log(answer)
//         //register answer
//        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//        this.displayResults();
//        this.displayResults('string')
//     },
//     displayResults: function(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answers);
//         } else if (type === 'string'){
//             //poll results are 13, 2, 4, 1
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//     },
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
// };
// poll.registerNewAnswer();

// //2
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');

// const runOnce = function(){
//     console.log('This will never run again');
// }
// runOnce();

// //IMMEDIATELY INWOKED FUNCTION EXPRESSION ( IIFE )
// (function(){
//     console.log('This will never run again');
// })();

// (() => console.log('This also will never run again'))();

// const secureBooking = function(){
//     let passengerCount = 0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`)
//     }
// }
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);


// //example 1.
// let f;
// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a * 2);
//     }
// }

// const h = function(){
//     const b = 777;
//     f  = function(){
//         console.log(b * 2);
//     }
// }

// g();
// f();
// console.dir(f);
// //reassignning f function
// h();
// f();

// console.dir(f)

// //example 2.
// const boardPassengers = function(n,wait){
//     const perGroup = n / 3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`)
//     }, wait * 1000);
//     console.log(`Will start boarding in ${wait} seconds`)
// }
// const perGroup = 1000;
// boardPassengers(180, 3);

//coding challange 2.

// (function(){
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

//     // header.addEventListener('click', (function(){
//     //     header.style.color = 'blue';
//     // }))

//     document.querySelector('body').addEventListener('click', function(){
//         header.style.color = 'blue';
//     })
// })();




























