// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//planning 

function(array of only numbers){
    if array not containing numbers continue

    if array of numbers
    iterating thru the numbers 
    get the min 
    get the max
    return the amplitude
}

// const amplituder = function(temperatures){
//     let max = temperatures[0];
//     let min = temperatures[0];

//     for(let i = 0; i < temperatures.length; i++){
//         const curTemp = temperatures[i];
//         if(typeof curTemp !== 'number'){
//             continue;
//         }
//         if(max < curTemp){
//         max = curTemp;
//         }
//         if(min > curTemp){
//             min = curTemp;
//         }
//     }
//     return max - min;
// }
// amplituder(temperatures);

const measureKelvin = function(){
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius'))
    };

    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin())

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplituder = function(temperatures){
    let max = temperatures[0];
    let min = temperatures[0];

    for(let i = 0; i < temperatures.length; i++){
        const curTemp = temperatures[i];
        if(typeof curTemp !== 'number'){
            continue;
        }
        if(max < curTemp){
        max = curTemp;
        }
        if(min > curTemp){
            min = curTemp;
        }
    }
    return max - min;
}
amplituder(temperatures);

//coding challange 1
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
const printForecast = function(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        // let counter = 0;
        // counter++;
        // if(counter === 1){
        //     console.log(`${arr[i]}C in ${counter} day`);
        // } else {
        //     console.log(`${arr[i]}C in ${counter} days`);
        // }
        str = str + `... ${arr[i]}C in ${i + 1} days `;
        
    }
    console.log(str)
}
printForecast(testData1);
*/