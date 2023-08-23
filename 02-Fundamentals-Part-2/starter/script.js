/*
function logger(a){
    console.log('aha');
}
logger();
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 0));
const num = Number('69');
console.log(num);

//function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;git 
}
const age1 = calcAge1(1998);

//function expression
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1, age2);

//arrow funcction
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetriement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetriement(1998, 'istvan'));

const cutFruitPieces = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
    return 2023 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName){
    const retirement = 65 - calcAge(birthYear);
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1998, 'istvan'));

//coding challange 1

//const scoreDolphins1 = [44, 23, 71];
//const scoreKoalas1 = [65, 54, 49];
//const calcAverage = scores => {
//    let counter = 0;
//    for(const score of scores){
//        counter += score;
//    }
//    return counter / scores.length;
//}
//const avgDolphins = calcAverage(scoreDolphins1);
//const avgKoalas = calcAverage(scoreKoalas1);
//const checkWinner = function(data1, data2){
//    if(data1 >= 2 * data2){
//        console.log(`dolphins won the game (${data1} vs ${data2})`);
//    } else if (data2 >= 2 * data1) {
//        console.log(`koalas won the game (${data2} vs ${data1})`);
//    } else {
//        console.log('nobody won')
//    }
//}
//checkWinner(avgDolphins, avgKoalas);

//const calcAverage = (a, b, c) => {
//    return (a, b, c)/ 3;
//}
////test 1
//const scoreDolphins1 = calcAverage(44, 23, 71);
//const scoreKoalas1 = calcAverage(65, 54, 49);
//
//const checkWinner = function (avgDolphins, avgKoalas){
//    if(avgDolphins >= 2 * avgKoalas){
//        console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`)
//    } else if(avgKoalas >= 2 * avgDolphins){
//        console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`)
//    } else {
//        console.log('no team wins')
//    }
//}
//checkWinner(scoreDolphins1, scoreKoalas1);

//const friends = ['michael', 'steven', 'peter'];

//const y = new Array(1991, 1238, 2020, 2004);
//console.log(friends[0]);
//console.log(friends.length);
//console.log(friends[friends.length - 1]);
//friends[2] = 'jay';
//console.log(friends);
//
//const calcAge = function (birthYear){
//    return 2037 - birthYear;
//}
//const years = [1990, 1967, 2012, 2002, 2018];
//const age1 = calcAge(years[0]);
//console.log(age1)

const friends = ['michael', 'steven', 'peter'];
const newLength = friends.push('jay');
console.log(newLength);
friends.unshift('john');
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(popped);
console.log(friends.indexOf('steven'));
console.log(friends.includes('steven'));
if(friends.includes('steven')){
    console.log('u have a friend named steven')
}

//coding challange 2
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];
// const calcTip = function(bills){
//     for(let i = 0; i < bills.length; i++){
//         if(bills[i] >= 50 && bills[i] <= 300){
//             tips.push(bills[i] * 0.15)
//         } else {
//             tips.push(bills[i] * 0.2)
//         }
//     }
//     return ;
// }
// calcTip(bills);
// const calcTotal = function(bills, tips){
// //   let sum = bills.map(function (number, index){
// //     return number + tips[index];
// //   })
// //   return sum;
//     for(let i = 0; i < bills.length; i++){
//         for(let j = 0; i < tips.length; i++){
//             totals.push(bills[i] + tips[i])
//         }
//     }
//     return ;
// }
// calcTotal(bills, tips);
// console.log(totals)

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(bills, tip, total)

const pArr = [
    'istvan',
    'balla',
    2023 - 1998, 
    'jobless',
    ['feri', 'hferi', 'tecel']
];
const pityke = {
    firstName: 'Istvan',
    lastName: 'Balla',
    age: 2023-1998,
    job: 'homeless',
    friends: ['feri', 'hferi', 'tecel'],
}
const nameKey = 'Name';
console.log(pityke['first' + nameKey])
console.log(pityke['last' + nameKey])

const interestedIn = prompt('what do you want to know about me? choose between firstName, lastName, age, job and friends')
if(pityke[interestedIn]){
    console.log(pityke[interestedIn])
} else {
    console.log('wrong request! ')
}
pityke.location = 'itthon';
pityke['twitter'] = 'lilpityke420';
console.log(pityke)
pityke.friends.bestfriend = 'tecel';
console.log(`${pityke.firstName} has ${pityke.friends.length} and his best friend is called ${pityke.friends.bestfriend}`)

const pityke = {
    firstName: 'Istvan',
    lastName: 'Balla',
    birthYear: 1998,
    job: 'homeless',
    friends: ['feri', 'hferi', 'tecel'],
    hasDriverLicense: true,
    // calcAge: function(birthYear){
    //     return 2023 - birthYear;
    // },
    // calcAge: function(){
    //     return 2023 - this.birthYear;
    // },
    calcAge: function(){
        this.age = 2023 - this.birthYear
        return this.age ;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge(this.birthYear)} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license`
    }
};
console.log(pityke.calcAge(pityke.birthYear));
console.log(pityke['calcAge'](pityke['birthYear']));
console.log(pityke.age)
console.log(pityke.getSummary)

//coding challange3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
john.calcBMI();
mark.calcBMI();

if(john.bmi > mark.bmi){
    console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`)
} else if(mark.bmi > john.bmi){
    console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`)
};
console.log(`${john.fullName} BMI ${john.bmi} is ${john.bmi > mark.bmi ? 'higher' : 'lower' } than ${mark.fullName}'s ${mark.bmi}`)

for(let i = 0; i <= 10; i++){
    console.log(`aha ${i}`)
}

const pityke = [
    'Istvan',
    'Balla',
    2023 - 1998,
    'krezi',
   ['feri', 'hferi', 'tecel'],
];
const types = [];

const years = [1991,2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
    ages.push(2023 - years[i]);
}
for(let i = 0; i < pityke.length; i++){
    types.push(pityke[i] + ' ' + typeof pityke[i])

}
for(let i = 0; i < pityke.length; i++){
    if(typeof pityke[i] !== 'string') continue;

    console.log(pityke[i], typeof pityke[i]);
}
console.log('----------------------')
for(let i = 0; i < pityke.length; i++){
    if(typeof pityke[i] === 'number') break;

    console.log(pityke[i], typeof pityke[i]);
}

const pityke = [
    'Istvan',
    'Balla',
    2023 - 1998,
    'krezi',
   ['feri', 'hferi', 'tecel'],
];
for(let i = pityke.length - 1; i >= 0; i--){
    console.log(pityke[i])
}
let rep = 1;
while(rep <= 10){
    console.log('rep');
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while(dice !== 6){
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('the loop is about to end')
    }
}
*/
///coding challange4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function(bill){
    for(let i = 0; i < bill.length; i++){
        if(bill[i] >= 50 && bill[i] <= 300){
            tips.push(bill[i] * 0.15);
        } else {
            tips.push(bill[i] * 0.2);
        }
    }
}
calcTip(bills);
const calcTotal = function(bill, tip){
    for(let i = 0; i < bill.length; i++){
        totals.push(bill[i] + tip[i])
    }
}
calcTotal(bills, tips);
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length ;
}
const averages = [calcAverage(bills), calcAverage(tips), calcAverage(totals)];
console.log(averages);
console.log(calcAverage(averages))