// setTimeout(() => {
//   console.log('TIMED OUT!');
// }, 300);

// Fulfilling a Promise
'use strict';
require('es6-promise');

//create Promise
var promise = new Promise((fulfill, reject) => {
  //fulfill promise
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
}).then(data => {
  console.log(data);
});
