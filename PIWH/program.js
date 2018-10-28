'use strict';
require('es6-promise');
// setTimeout(() => {
//   console.log('TIMED OUT!');
// }, 300);

// Fulfilling a Promise
// 'use strict';
// require('es6-promise');
// //create promise
// var promise = new Promise((fulfill, reject) => {
//   //fulfill promise
//   setTimeout(() => {
//     fulfill('FULFILLED!');
//   }, 300);
// }).then(data => {
//   console.log(data);
// });

// Reject a Promise
// ('use strict');
// require('es6-promise');

// var promise = new Promise((fulfill, reject) => {
//   setTimeout(() => {
//     reject(new Error('REJECTED!'));
//   }, 300);
// });

// var onReject = error => {
//   console.log(error.message);
// };

// promise.then(null, onReject);

// TO REJECT OR NOT REJECT
// 'use strict';
// require('es6-promise');

// var promise = new Promise((fulfill, reject) => {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

// var onRejected = err => {
//   console.log(err.message);
// };

// promise.then(console.log, onRejected);

// ALWAYS ASYNCHRONOUS
// 'use strict';
// require('es6-promise');

// var promise = new Promise((fulfill, reject) => {
//   fulfill('PROMISE VALUE');
// });

// promise.then(console.log);

// console.log('MAIN PROGRAM');

//SHORTCUTS
// 'use strict';
// require('es6-promise');

// var promise = Promise.reject(new Error('ERROR'));

// promise.catch(function(err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });

//PROMISE AFTER PROMISE
// 'use strict';
// require('es6-promise');

// var secondPromise = first().then(promise => {
//   return second(promise);
// });

// secondPromise.then(console.log);

//VALUES AND PROMISES
// 'use strict';
// require('es6-promise');

// var attachTitle = name => {
//   return `DR. ${name}`;
// };

// var promise = Promise.resolve('MANHATTAN');

// promise.then(attachTitle).then(console.log);

//THROW AN ERROR
// 'use strict';
// require('es6-promise');
// var json = process.argv[2];

// var parsePromised = json => {
//   return new Promise((fulfill, reject) => {
//     try {
//       JSON.parse(json);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// parsePromised(json).then(null, error => console.log(error.message));

//THERE'S ALWAYS A CATCH
// 'use strict';
// require('es6-promise');

// var alwaysThrows = () => {
//   throw new Error('OH NOES');
// };

// var iterate = arg => {
//   console.log(arg);
//   return arg + 1;
// };

// Promise.resolve(iterate(1))
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(e => console.log(e.message));

//MULTIPLE PROMISES
// var all = (promise1, promise2) => {
//   return new Promise((fulfill, reject) => {
//     var counter = 0;
//     var result = [];

//     promise1.then(val => {
//       result[0] = val;
//       counter += 1;
//       if (counter >= 2) {
//         fulfill(result);
//       }
//     });
//     promise2.then(val => {
//       result[1] = val;
//       counter += 1;
//       if (counter >= 2) {
//         fulfill(result);
//       }
//     });
//   });
// };

// all(getPromise1(), getPromise2()).then(console.log);

//FETCH JSON
// const http = require('q-io/http'),
//   url = 'http://localhost:1337';

// http
//   .read(url)
//   .then(response => console.log(JSON.parse(response)))
//   .catch(console.log);

//DO SOME WORK
const http = require('q-io/http'),
  cache = 'http://localhost:7000/',
  url = 'http://localhost:7001/';

http
  .read(cache)
  .then(id => {
    return http.read(`${url}${id}`);
  })
  .then(json => console.log(JSON.parse(json)))
  .then(null, console.error)
  .done();
