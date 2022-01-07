const axios = require('axios');

// 1
function isTooLong(str = '') {
  return new Promise((resolve, reject) => {
    if (str.length <= 20) {
      resolve(true);
    } else {
      reject('string length is over 20');
    }
  });
}

// 2
function isSuperior(a = 0, b = 0) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(a - b);
    } else {
      reject('b is bigger than a');
    }
  });
}

// 3
function ismajor(date = '') {
  return new Promise((resolve, reject) => {
    const majorite = new Date().getFullYear() - 18;
    if (parseInt(date.split('/')[2]) >= majorite) {
      resolve(true);
    } else {
      reject('minor');
    }
  });
}

async function main() {

  // 4
  isTooLong('tesdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddt').then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  isTooLong('test').then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  isSuperior(5, 8).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  isSuperior(8, 5).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  ismajor('01/01/2020').then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  ismajor('01/01/1990').then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

  // 5
  try {
    console.log(await isTooLong('test'));
    console.log(await isTooLong('tesdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddt'))
    console.log(await isSuperior(5, 8));
    console.log(await isSuperior(8, 5));
    console.log(await ismajor('01/01/2020'));
    console.log(await ismajor('01/01/1990'));

  } catch (error) {
    console.log(error);
  }

  // 6
  axios.get('https://swapi.py4e.com/api/starships/10')
    .then(function (response) {
      console.log('axios:', response.data.name);
    })
    .catch(function (error) {
      console.log('axios:', error.response.data.detail);
    });

  axios.get('https://swapi.py4e.com/api/planets')
    .then(function (response) {
      console.log('axios:', response.data.count);
    })
    .catch(function (error) {
      console.log('axios:', error.response.data.detail);
    });

  axios.get('https://swapi.py4e.com/api/people?search=darth%20vader')
    .then(function (response) {
      console.log('axios:', response.data.results[0].birth_year);
    })
    .catch(function (error) {
      console.log('axios:', error);
    });

  axios.get('https://swapi.py4e.com/api/people/13?format=wookiee')
    .then(function (response) {
      console.log('axios:', response.data.whrascwo);
    })
    .catch(function (error) {
      console.log('axios:', error.response.data.detail);
    });

  axios.get('https://swapi.py4e.com/api/people?search=r2')
    .then(function (response) {
      const planet = response.data.results[0].homeworld;

      axios.get(planet)
        .then(function (response) {
          console.log('axios:', response.data.name);
        }).catch(function (error) {
          console.log('axios:', error);
        })
    })
    .catch(function (error) {
      console.log('axios:', error);
    });
}

main();
