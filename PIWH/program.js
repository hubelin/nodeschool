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
('use strict');
require('es6-promise');

var promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

var onReject = error => {
  console.log(error.message);
};

promise.then(null, onReject);
