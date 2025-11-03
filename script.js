// // 'use strict';

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // ////////////////////////////////////////////////////////////
// // // API 3.1
// // const renderCountry = function (data, className = '') {
// //   const html = `
// //     <article class="country ${className}">
// //       <img class="country__img" src="${data.flags.svg}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name.common}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${(
// //           data.population / 1000000
// //         ).toFixed(1)} million people</p>
// //         <p class="country__row"><span>🗣️</span>${
// //           Object.values(data.languages)[0]
// //         }</p>
// //         <p class="country__row"><span>💰</span>${
// //           Object.values(data.currencies)[0].name
// //         }</p>
// //       </div>
// //     </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // };

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// //   countriesContainer.style.opacity = 1;
// // };

// // // /////////////////////////////////////////////////////////
// // // Welcome to Callback Hell
// // const renderCountry0 = function (data, className = '') {
// //   const html = ` <article class="country ${className}">
// //   <img class="country__img" src="${data.flags}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(
// //       data.population / 1000000
// //     ).toFixed(1)} people</p>
// //     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //   </div>
// // </article>`;
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // };

// // // Call Api With Arrow Functions
// // // 253 - Chaining Promises

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //   return fetch(url).then(response => {
// //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// //     return response.json();
// //   });
// // };

// // const getCountryData = function (country) {
// //   // Country 1
// //   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders?.[0];
// //       // const neighbour = 'dfsdfdef';
// //       console.log(neighbour);

// //       if (!neighbour) throw new Error('No neighbour found!');

// //       // Country 2
// //       return getJSON(
// //         `https://restcountries.com/v3.1/alpha/${neighbour}`,
// //         'Country not found'
// //       );
// //     })

// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       // alert(err);
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try Again! `);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// //   // .then(data => alert(data));
// // };

// // // 262 - Consuming Promises with AsyncAwait

// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// // const whereAmI = async function () {
// //   try {
// //     // Geolocation
// //     const pos = await getPosition();

// //     const { latitude: lat, longitude: lng } = pos.coords;
// //     // console.log(pos.coords);

// //     // Reverse Geocoding
// //     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     if (!resGeo.ok) throw new Error('Problem Getting Location Data');
// //     const dataGeo = await resGeo.json();
// //     // console.log(dataGeo);

// //     const res = await fetch(
// //       `https://restcountries.com/v3.1/name/${dataGeo.country}`
// //     );
// //     // console.log(res);
// //     if (!res.ok) throw new Error('Problem Getting Country');
// //     const data = await res.json();
// //     // console.log(data);
// //     renderCountry(data[0]);

// //     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
// //   } catch (err) {
// //     console.log(`${err} 💥`);
// //     // renderError(`Something went wrong 💥 ${err.message}`);
// //     renderError(`💥 ${err.message}`);

// //     // Reject Promise Returned From Async Function
// //     throw err;
// //   }
// // };

// // const wait = function (seconds) {
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, seconds * 1000);
// //   });
// // };

// // const imgContainer = document.querySelector('.images');

// // const createImage = function (imgPath) {
// //   return new Promise(function (resolve, reject) {
// //     const img = document.createElement('img');
// //     img.src = imgPath;

// //     img.addEventListener('load', function () {
// //       imgContainer.append(img);
// //       resolve(img);
// //     });

// //     img.addEventListener('error', function () {
// //       reject(new Error('Image not found'));
// //     });
// //   });
// // };

// // let currentImg;

// // // PART 1
// // const loadNPause = async function () {
// //   try {
// //     // Load Image 1
// //     let img = await createImage('img/img-1.jpg');
// //     console.log('Image 1 Loaded');
// //     await wait(2);
// //     img.style.display = 'none';

// //     // Load Image 2
// //     img = await createImage('img/img-2.jpg');
// //     console.log('Image 2 Loaded');
// //     await wait(2);
// //     img.style.display = 'none';
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // loadNPause();

// // // PART 2
// // const loadAll = async function (imgArr) {
// //   try {
// //     const imgs = imgArr.map(async img => await createImage(img));
// //     console.log(imgs);

// //     const imgsEl = await Promise.all(imgs);
// //     console.log(imgsEl);
// //     imgsEl.forEach(img => img.classList.add('parallel'));
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// //////////////////////////////////////////////////////////////////////

// 'use strict';

// // DOM elements
// const countriesContainer = document.querySelector('.countries');
// const imgContainer = document.querySelector('.images');

// // Function to render country info
// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1_000_000
//         ).toFixed(1)}M</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//           data.languages
//         ).join(', ')}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// // Fetch and display country data
// const getCountryData = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) throw new Error(`Country not found (${res.status})`);
//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Helper function to wait (for async demo)
// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// // Function to create an image (for flags)
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// // Load multiple images at once
// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(path => createImage(path));
//     const imgsEl = await Promise.all(imgs);
//     imgsEl.forEach(img => img.classList.add('parallel'));
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Wait until DOM is ready (prevents null error)
// document.addEventListener('DOMContentLoaded', () => {
//   const btnCountry = document.getElementById('btn-country');
//   const btnFlags = document.getElementById('btn-flags');

//   // Country button → load Pakistan info
//   btnCountry.addEventListener('click', () => {
//     countriesContainer.innerHTML = '';
//     getCountryData('pakistan');
//   });

//   // Flags button → load flag images
//   btnFlags.addEventListener('click', async () => {
//     imgContainer.innerHTML = '';
//     await loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
//     console.log('All flags loaded');
//   });
// });

'use strict';

// DOM elements
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

// State to track active action
let activeAction = null;

// Function to render country info
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1_000_000
        ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        ).join(', ')}</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Fetch and display country data
const getCountryData = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error(`Country not found (${res.status})`);
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
  }
};

// Helper function to wait (for async demo)
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

// Function to create an image (for flags)
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// Load multiple images at once
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(path => createImage(path));
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

// Main logic
document.addEventListener('DOMContentLoaded', () => {
  const btnCountry = document.getElementById('btn-country');
  const btnFlags = document.getElementById('btn-flags');

  // COUNTRY BUTTON — run only once until reset
  btnCountry.addEventListener('click', () => {
    if (activeAction === 'country') return; // already active
    activeAction = 'country';

    // Clear previous flag images
    imgContainer.innerHTML = '';
    countriesContainer.innerHTML = '';

    // Run country info logic
    getCountryData('pakistan');
  });

  // FLAGS BUTTON — run only once until reset
  btnFlags.addEventListener('click', async () => {
    if (activeAction === 'flags') return; // already active
    activeAction = 'flags';

    // Clear previous countries
    countriesContainer.innerHTML = '';
    imgContainer.innerHTML = '';

    // Run flag gallery logic
    await loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
    console.log('All flags loaded');
  });
});
