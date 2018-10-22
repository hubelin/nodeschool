// Baby Steps
// total = 0;
// for (let i = 2; i < process.argv.length; i++) {
//   total += Number(process.argv[i]);
// }
// console.log(total);

//My First I/O
// var fs = require('fs');

// let total = 0;
// let res = fs.readFileSync(process.argv[2]);
// var buf = res.toString().split('\n');
// console.log(buf.length - 1);

//MY FIRST ASYNC I/O
// var fs = require('fs');

// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   res = data.split('\n');
//   console.log(res.length - 1);
// });

//FILTERED LS

// var fs = require('fs');
// var path = require('path');
// var mydir = process.argv[2];
// var ext = '.' + process.argv[3];

// var readdir = fs.readdir(mydir, (err, list) => {
//   if (err) {
//     throw new Error('Error');
//   }
//   list.forEach(file => {
//     var fileExt = path.extname(file);
//     if (fileExt === ext) {
//       console.log(file);
//     }
//   });
// });

//MAKE IT MODULAR
// var path = require('path');
// var mymodule = require('./mymodules');
// var dir = process.argv[2];
// var filterExtension = process.argv[3];

// var callback = function(err, list) {
//   if (err) throw err;
//   list.forEach(function(file) {
//     console.log(file);
//   });
// };

// mymodule(dir, filterExtension, callback);

//HTTP CLIENT
// var http = require('http');

// var url = process.argv[2];

// http.get(url, res => {
//   res.setEncoding('utf8');
//   res.on('data', data => {
//     console.log(data);
//   });
// });

//HTTP COLLECT
// var bl = require('bl');
// var http = require('http');

// var url = process.argv[2];

// http.get(url, res => {
//   res.pipe(
//     bl((err, data) => {
//       if (err) throw Error;
//       console.log(data.length);
//       console.log(data.toString());
//     })
//   );
// });

//JUGGLING ASYNC
var http = require('http');
