'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');


///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src=" ${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderCountry2 = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src=" ${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};


const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url).then(res => {
    if(!res.ok) throw new Error(`${errorMsg} (${res.status})`);

    return res.json();
  });
};

const wait = function(seconds){
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

/*
const getCountryAndNeighbour = function (country) {
  //(AJAX CALL 1)
  //Oldest way AJAX call
  const request = new XMLHttpRequest();

  //Making the AJAX call//Getting data
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  //Sendig the request to the url//(cannot store data in variables cuz data is not there)
  request.send(); //request fetching the data in the background// when it is done the LOAD EVENT the callback is called

  //Register a callback on the request object for the loadevent
  request.addEventListener('load', function () {
    // responseText fires if the data arrived
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country(AJAX CALL 2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //Second AJAX CALL
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('canada');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
    }, 1000);
  }, 1000);
}, 1000);

//Fetcing 
const request = fetch('https://restcountries.com/v2/name/hungary');
console.log(request);

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//     console.log(response);
//     return response.json(); //json() function returning another PROMISE
//   }).then(function(data){
//     console.log(data)
//     renderCountry(data[0])
//   });
// }

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if (!response.ok) {
    throw new Error(`country not found ${errorMsg} (${response.status})`);
    }
  return response.json();
  });
}


// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`country not found ${response.status}`);
//       }
//       return response.json();
//     }) //json() function returning another PROMISE)
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdasd';
//       if (!neighbour) return;

//       //Country 2 (neighbour)
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response =>{
//       if (!response.ok) {
//         throw new Error(`country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} error`);
//       renderError(`something went wrong ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('hungary');
// });

const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      //Country 2 (neighbour)
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'country not found');
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.error(`${error} error`);
      renderError(`something went wrong ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData('hungary');
});

getCountryData('asutralia');

//Coding challange 1.
const renderCountry2 = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src=" ${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const whereAmI = function(lat, lon){
  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=a7b8065d7aa6413084aeb0b29122d5d1`)
  .then(res => {
    if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log(`You are in ${data.results[0].city}, ${data.results[0].country}`);
    return fetch(`https://restcountries.com/v2/name/${data.results[0].country}`);
  })
  .then(res => {
    if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => { renderCountry2(data[0]) })
  .catch(err => console.error(err.message))
  .finally(() => countriesContainer.style.opacity = 1);
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI(47.23490, 19.61270);

//Executing queue
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100; i++){

  }
  console.log(res)
} )
console.log('Test end');

//Building a simple PROMISE
const lotteryPromise = new Promise(function(resolve, reject){
  console.log('Lottery draw is happening');

  setTimeout(() => {
    if(Math.random() >= 0.5){
      resolve('You Win')
    } else {
      reject(new Error('You Lost'))
    }
  }, 2000);
});
lotteryPromise.then(resolvedValue => console.log(resolvedValue)).catch(err => console.error(err));

//Promisifying the setTimeout function
const wait = function(seconds){
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => {
  console.log('I waited for 2 seconds');
  return wait(1);
}).then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x))
Promise.reject(new Error('Problem')).catch(x => console.error(x))

//Promisify a callback based API
const getPosition = function(){
  return new Promise(function(resolve, reject){
    //Specify the callback manually
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err));

    //Automaticly
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(position => console.log(position));

const whereAmI = function(){
  getPosition().then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;
    return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=a7b8065d7aa6413084aeb0b29122d5d1`)
  })
  .then(res => {
    if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log(`You are in ${data.results[0].city}, ${data.results[0].country}`);
    return fetch(`https://restcountries.com/v2/name/${data.results[0].country}`);
  })
  .then(res => {
    if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => { renderCountry2(data[0]) })
  .catch(err => console.error(err.message))
  .finally(() => countriesContainer.style.opacity = 1);
}
btn.addEventListener('click', whereAmI);

//Coding challange 2.
const wait = function(seconds){
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const createImage = function(imgPath){
  

  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function(){
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function(){
      reject(new Error('IMG not found'))
    });
  })
}

let currentImg;

createImage('img/img-1.jpg')
.then(img => {
  currentImg = img;
  console.log('Image 1 loaded');
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-2.jpg');
})
.then(img => {
  currentImg = img;
  console.log('img2 loaded');
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
})
.catch(err => console.error(err));

//Async Await
const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function(){
  try {
  //Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

  //Reverse geocoding
    const resGeo = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=a7b8065d7aa6413084aeb0b29122d5d1`);
    if(!resGeo.ok) throw new Error('Problem getting location data')

    const dataGeo = await resGeo.json();

  //Country data
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))// this is the old way

  //New way
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.results[0].country}`);
    if(!res.ok) throw new Error('Problem getting location data')
    const data = await res.json();
    renderCountry2(data[0]);

    //Returning values from Async function//////////////////////////////////////////////9
    return `You are in ${dataGeo.results[0].city}`;
} catch (err){
  console.error(err);
  renderError(`${err.message}`);

  //Manually reject returned from async function
  throw err;
}
};

console.log('1: will get location');

// const city = whereAmI();
// console.log(city);
// whereAmI()
// .then(city => console.log(city))
// .catch(err => console.error(err))
// .finally(() => console.log('3: finished getting location'));
// console.log('2: finish getting location');

(async function(){
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch(err) {
    console.error(err.message);
  }
  console.log('3: finished getting location')
})();

//Combinators
const get3Countries = async function(c1, c2, c3){
  try { 
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    // console.log(data1.capital,
    //    data2.capital,
    //    data3.capital);

    console.log(data.map(data => data[0].capital));
  } catch (err){
    console.error(err);
  }
};
get3Countries('hungary', 'canada', 'netherland');

//Promise.race
(async function(){
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/egypt`)
  ]);

    console.log(res[0]);
})();

const timeout = function(sec){
  return new Promise(function(_, reject){
    setTimeout(() => {
      reject(new Error('request took too long!'))
    }, sec * 1000);
  })
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/hungary`),
  timeout(0.1)
])
.then(res => console.log(res))
.catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error')
])
.then(res => console.log(res))
.catch(err => console.error(err));

//Promiose.any [ES2021] takes the first fulfilled promise
Promise.any([
  Promise.resolve('success'),
  Promise.reject('error')
])
.then(res => console.log(res))
.catch(err => console.error(err));

//Coding challange 3.
const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function(){
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function(){
      reject(new Error('IMG not found'))
    });
  })
}

const loadNPause = async function(){
  try {
    //Load img 1.
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //Load img 2.
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    //Load img 3.
    img = await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
    console.log('done');

  } catch (err){
    console.error(err);
  }
}
// loadNPause();

const loadAll = async function(imgArr){
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => {
      img.classList.add('parallel');
    });
  } catch(err){
    console.error(err);
  }
}
loadAll([
  'img/img-1.jpg',
  'img/img-2.jpg',
  'img/img-3.jpg'
]);
*/
