/*
console.log('hello wold')

// let js = 'amazing';
// if (js === 'amazing') alert('js is fun');

let firstName = 'Jonas';
console.log(firstName);
 
let jonasAndMathilda = 'JM';

let myFirstJob = 'programmer';
let myCurrentJob = 'jobless';

let job1 = myFirstJob;
let job2 = myCurrentJob;

console.log(job1, job2)

let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof job2, true, firstName);

jsIsFun = 'yes';
console.log(jsIsFun)

let year;
year = 1998;
console.log(typeof year);
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1998; //const cant be changed

lastName = 'Istvan';
console.log(lastName);

const now = 2023;
const ageJonas = now - 1990; 
const ageSarah = now - 1987;
console.log(ageJonas / 4, ageSarah * 9);

const firstName = 'Balla';
const lastName = 'Istvan';
console.log(firstName + ' ' + lastName);
console.log(ageJonas > ageSarah);
console.log(now - 1000 > now - 2018);

const fullName = firstName + ' ' + lastName;
console.log(fullName);


const now = 2037;
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);



///coding challange

//test 1 
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI > johnBMI)

//test 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
console.log(markBMI2 > johnBMI2);


const firstName = 'Pityke';
const job = 'jobless';
const birthYear = 1998;
const year = 2023;
const pityke = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(pityke);

const pitykeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(pitykeNew);
console.log('String with \n\ multiple \n\ lines');
console.log(`String
with
multiple
lines`);


const age = 23;
const isOldEnough = age >= 18;
if (isOldEnough){
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} year`);
}

let century
const birthYear = 1991;
 if (birthYear <= 2000){
    century = 20;
 } else {
    century = 21;
 }
 console.log(century);


////coding challange 2
 //test 1 
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
if (markBMI > johnBMI){
    console.log(`${markBMI} marks bmi is bigger`);
} else { 
    console.log(`${johnBMI} johns bmi is bigger`)
}

//test 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
if (markBMI2 > johnBMI2){
    console.log(`${markBMI2} marks bmi is bigger`);
} else {
    console.log(`${johnBMI2} johns bmi is bigger`);
}

const money = 1;
if (money){
    console.log('dont spend it all');
} else {
    console.log('you should get a job')
}

let height;
if(height){
    console.log('yey height is defined');
} else {
    console.log('height is undefined')
}

const age = 18;
if (age === 18) console.log('you just became an adult(strict)');
if(age == 18) console.log('you just became an adult(loose)');

const favourite = prompt('what is your favourite number?');
console.log(typeof favourite);

if(favourite === 23){ //'23' == 23 (number)
    console.log('cool 23 is an amazing number')
} else if ( favourite === 7){
    console.log('7 is a cool number');
} else {
    console.log('number is not 23 or 7')
}

if(favourite !== 23){
  console.log('why not 23?')
}



const hasDriveLicense = true;
const hasGoodVision = true;
const shouldDrive = hasDriveLicense && hasGoodVision;
console.log(hasDriveLicense && hasGoodVision);
console.log(hasDriveLicense || hasGoodVision);
console.log(!hasDriveLicense );
//if(shouldDrive){
//  console.log('sarah is able to drive');
//} else {
//  console.log('someone else should drive')
//}
const isTired = false;
console.log(hasDriveLicense && hasDriveLicense && isTired);

if(hasDriveLicense && hasGoodVision && !isTired){
  console.log('sarah is able to drive');
} else {
  console.log('someone else should drive')
}


///coding challange 3

//game 1
//let dolphinsScores1 = [96, 108, 89];
//let koalasScores1 = [97, 112, 110];
//let dolphinsAverage1 = 0;
//let koalasAverage1 = 0;
//
//for(const scores of dolphinsScores1){
//    let counter = 0;
//    counter += scores;
//    dolphinsAverage1 = counter / 3;
//}
//for(let i = 0; i < koalasScores1.length; i++){
//    let counter = 0;
//    counter += koalasScores1[i];
//    koalasAverage1 = counter / 3;
//}
//if(koalasAverage1 < dolphinsAverage1){ 
//    console.log('dolphins won the game, koalas lost');
//}
//else if(dolphinsAverage1 < koalasAverage1) {
//    console.log('koalas won the game, dolphins lost');
//}
//else{
//    console.log('draw');
//}

//bonus 1
let dolphinsScores1 = [97, 112, 103];
let koalasScores1 = [109, 95, 123];
let dolphinsAverage1 = 0;
let koalasAverage1 = 0;

for(const scores of dolphinsScores1){
    let counter = 0;
    counter += scores;
    dolphinsAverage1 = counter / 3;
}
for(let i = 0; i < koalasScores1.length; i++){
    let counter = 0;
    counter += koalasScores1[i];
    koalasAverage1 = counter / 3;
}
if(koalasAverage1 < dolphinsAverage1 && dolphinsAverage1 >= 100){ 
    console.log('dolphins won the game, koalas lost');
}
else if(dolphinsAverage1 < koalasAverage1 && koalasAverage1 >= 100) {
    console.log('koalas won the game, dolphins lost');
}
else if(dolphinsAverage1 === koalasAverage1 && dolphinsAverage1 >= 100 && koalasAverage1 >= 100){
    console.log('both win');
} else {
    console.log('noone wins');
}


const day = 'monday';
switch (day){
    case 'monday':
        console.log('muay thai');
        console.log('coding');
        break;
    case 'tuesday':
        console.log('english course');
        break;
    case 'wednesday':
        break;
    case 'thursday':
            console.log('szajbarugas');
            break;
    case 'friday':
        break;
    case 'saturday':
        console.log('weekend')
            break;
        default:
            console.log('it is not a valid day')
}

if(day === 'monday'){
    console.log('muay thai');
    console.log('coding');
} else if(day === 'tuesday'){
    console.log('english course');
} else if(day === 'wednesday'){
    
} else if(day === 'thursday'){
    console.log('szajbarugas');
} else if(day === 'friday'){
    
} else if(day === 'saturday'){
    console.log('weekend')
} else {
    console.log('it is not a valid day')
}

const age = 3;
age >= 18 ? console.log('i like to drink beer') :
console.log('i like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log( drink2);

console.log(`i like to drink ${drink}`)

///coding challange 4
let bill = 90;
let tip =  (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.2;
//if (bill >= 50 && bill <= 300){
//    tip = 1.15;
//     bill = bill * tip;
//    
//} else {
//    tip = 1.2;
//    bill = bill * tip;
//}
console.log(`the bill is ${bill}, the tip is ${tip}, final bill is ${bill + tip}`)
*/
