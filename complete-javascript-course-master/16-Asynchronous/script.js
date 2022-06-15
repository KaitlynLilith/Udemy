// 'use strict';

// function getCountryData(country) {
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// function renderCountry(data, className = '') {
//   const html = `<article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 100000
//         ).toFixed(1)} million people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].nam}</p>
//       </div>
//     </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }

// const urlAPI = `https://restcountries.com/v2/name/${country}`;

//   ///////////////////////////////////////
//   const request = new XMLHttpRequest();
//   request.open('GET', urlAPI);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 100000
//     ).toFixed(1)} million people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].nam}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

// function getCountryDataAndNeighbour(country) {
//   const btn = document.querySelector('.btn-country');
//   const countriesContainer = document.querySelector('.countries');

//   const urlAPI = `https://restcountries.com/v2/`;

//   ///////////////////////////////////////
//   const request = new XMLHttpRequest();
//   request.open('GET', `${urlAPI}name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `${urlAPI}alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// }
// getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('usa');
// getCountryDataAndNeighbour('germany');

//

// console.log('Test start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');
// const lottery = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening!');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win!');
//     } else {
//       reject(new Error('You lost!'));
//     }
//   }, 2000);
// });

// lottery.then(res => console.log(res)).catch(err => console.error(err));

// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 seconds'));

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// function renderCountry(data, className = '') {
//   console.log(data);
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 100000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// const whereAmI = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();
//     const { latitude, longitude } = pos.coords;
//     const resGeo = await fetch(
//       `https://geocode.xyz/${latitude},${longitude}?geoit=json`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = res.json();
//     console.log(data);
//     renderCountry(data);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };
// btn.addEventListener('click', whereAmI);

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Finished'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('Finished');
// })();

// function getJSON(url, errorMsg = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// }

// async function get3Countries(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// }
// get3Countries('canada', 'mexico', 'portugal');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   getJSON(`https://restcountries.com/v2/name/italy`),
//   getJSON(`https://restcountries.com/v2/name/egypt`),
//   getJSON(`https://restcountries.com/v2/name/mexico`),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   getJSON(`https://restcountries.com/v2/name/italy`),
//   getJSON(`https://restcountries.com/v2/name/egypt`),
//   getJSON(`https://restcountries.com/v2/name/mexico`),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
