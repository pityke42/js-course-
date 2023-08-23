'use strict';
/*
function calcAge(birthYear){
    const age = 2023 - birthYear;
    
    function printAge(){
        let outPut = `${firstName} is ${age}, born in ${birthYear}`;
        console.log(outPut); 

        if(birthYear >= 1987 && birthYear <= 2012){
            var genZ = true; //var is a function scoped variable
            //creating new variavble with same name as aouter scope's variable
            const firstName = 'Feri';
            const str = `Oh and you are a GenZ, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            } 
            outPut = 'NEW OUTPUT'; //reassigning outer scope's variable

        }
        // console.log(str) //str is a block scoped variable
        console.log(genZ); //genZ is a function scoped variable
        console.log(outPut);
    }

    printAge();

    return age;
}

const firstName = 'Pityke';
calcAge(1998);


//hoisiting variables
console.log(me);
console.log(job);
console.log(year);

var me = 'Pityke';
let job = 'jobless';
const year = 1998;

//hoiseting functions
console.log(addArrow(2, 3));
console.log(addDecl(2, 3));
console.log(addExp(2, 3));

function addDecl(a, b){
    return a + b;
}
const addExp = function(a, b){
    return a + b;
}
const addArrow = (a, b) => {
    a + b;
}

//example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('all produccts deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x)

// const calcAge = function (birthYear){
//     console.log(2023 - birthYear);
//     console.log(this)
// }
// calcAge(1998);

// const calcAgeArrow = (birthYear) => {
//     console.log(2023 - birthYear);
//     console.log(this)
// }
// calcAgeArrow(1998);


// //method borrowing 
// const pityke = {
//     year: 1998,
//     calcAge: function(){
//         console.log(2023 - this.year);
//     }
// }
// pityke.calcAge()
// const matilda = {
//     year: 2017,
// }
// matilda.calcAge = pityke.calcAge;

// const f = pityke.calcAge;
// f();

const pityke = {
    firstName: 'Balla',
    year: 1998,
    calcAge: function(){
        // console.log(2023 - this.year);

        // //solution 1.
        // //create self var to access the THIS keyword
        // const self = this;

        // console.log(2023 - this.year);
        // const isGenZ = function(){
        //     console.log(self);
        //     console.log( self.year >= 1997 && self.year <= 2012);

        //     //console.log(this.year >= 1997 && this.year <= 2012);
        // };
   
        //solution 2.//arrow function using THIS keyword from the parent's scope fj      
        const isGenZ = () =>{
            console.log(this);
            console.log( this.year >= 1997 && this.year <= 2012);

            //console.log(this.year >= 1997 && this.year <= 2012);
        };
        isGenZ();
    },
    greet: () => {
        console.log(`Hey ${this.firstName}`)
    }
};

pityke.calcAge();
//ARGUMENTS keyword
const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);

 let age = 30;
 let oldAge = age;
 age = 31;console.log(age);
 console.log(oldAge);

 const me = {
    name: 'Pityke',
    age: 24,
 };

 const friend = me;
 friend.age = 27;
 console.log('friend', friend);
 console.log('me', me);
 */

 //primitive types
 let lastName = 'Williams';
 let oldLastName = lastName;
 lastName = 'Davis';
 console.log(lastName, oldLastName)


 //reference types
 const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,

 };

 const marriedJessica = jessica;
 marriedJessica.lastName = 'Davis';
 console.log('before marrige:', jessica);
 console.log('after marriage:', marriedJessica);
 //marriedJessica = {} //we can't do because the const variable

 //copying objects
 const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
 };

 const jessicaCopy = Object.assign({}, jessica2);
 jessicaCopy.lastName = 'Davis';
 
 jessicaCopy.family.push('Mary');
 jessicaCopy.family.push('John');
 
 console.log('before marriage:', jessica2);
 console.log('after marriage: ', jessicaCopy);