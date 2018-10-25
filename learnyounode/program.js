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
// var http = require('http');
// var bl = require('bl');
// var results = [];
// var urls = process.argv.slice(2);
// var count = urls.length;

// urls.forEach((url, index) => {
//   http.get(url, res => {
//     res.pipe(
//       bl((err, data) => {
//         if (err) throw Error;
//         results[index] = data.toString();
//         count--;

//         if (count === 0) {
//           results.forEach(result => {
//             console.log(result);
//           });
//         }
//       })
//     );
//   });
// });

//TIME SERVER
// var net = require('net');

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i;
// }
// net
//   .createServer(socket => {
//     socket.end(
//       (() => {
//         var date = new Date();
//         return (
//           date.getFullYear() +
//           '-' +
//           zeroFill(date.getMonth() + 1) +
//           '-' +
//           zeroFill(date.getDate()) +
//           ' ' +
//           zeroFill(date.getHours()) +
//           ':' +
//           zeroFill(date.getMinutes())
//         );
//       })() + '\n'
//     );
//   })
//   .listen(Number(process.argv[2]));

//HTTP FILE SERVER
// var http = require('http');
// var fs = require('fs');
// var port = Number(process.argv[2]);
// var file = process.argv[3];

// http
//   .createServer((req, res) => {
//     fs.createReadStream(file).pipe(res);
//   })
//   .listen(port);

//HTTP UPPERCASERER
// var http = require('http');
// var map = require('through2-map');

// var port = Number(process.argv[2]);

// http
//   .createServer((req, res) => {
//     if (req.method !== 'POST') {
//       return res.end('send me a POST\n');
//     }
//     req
//       .pipe(
//         map(chunk => {
//           return chunk.toString().toUpperCase();
//         })
//       )
//       .pipe(res);
//   })
//   .listen(port);

var http = require('http');
var url = require('url');

var parseTime = time => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
};

var unixTime = time => {
  return { unixtime: time.getTime() };
};

var parseQuery = url => {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso));
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso));
    default:
      return 'Enter valid endpoint url';
  }
};
http
  .createServer(function(request, response) {
    // assign request.url to variable url
    if (request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      url = url.parse(request.url, true);
      // log contents of url to console
      response.end(JSON.stringify(parseQuery(url)));
    } else {
      response.writeHead(405);
      response.end();
    }
  })
  .listen(+process.argv[2]);
