var http = require('http'),
  fs = require('fs');
async = require('async');

//WATERFALL
// async.waterfall([
//   cb => {
//     fs.readFile(process.argv[2], 'utf8', cb);
//   },
//   (url, cb) => {
//     http.get(url, res => {
//       body = '';
//       res.on('data', chunk => {
//         body += chunk.toString();
//       });
//       res
//         .on('end', () => {
//           cb(null, body);
//         })
//         .on('error', err => {
//           cb(err);
//         });
//     });
//   },
//   data => {
//     console.log(data);
//   }
// ]);

//SERIES

// var httpGet = i => {
//   return done => {
//     http.get(process.argv[i], res => {
//       body = '';
//       res.on('data', chunk => {
//         body += chunk.toString();
//       });
//       res.on('end', () => {
//         done(null, body);
//       });
//       res.on('error', err => {
//         done(err);
//       });
//     });
//   };
// };
// async.series(
//   {
//     requestOne: httpGet(2),
//     requestTwo: httpGet(3)
//   },
//   (err, results) => {
//     console.log(results);
//   }
// );
