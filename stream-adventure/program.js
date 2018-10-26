// //HTTP SERVER
// var http = require('http');
// var fs = require('fs');
// var through = require('through2');
// var stream = through(
//   function write(buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
//   },
//   function end(done) {
//     done();
//   }
// );

// http
//   .createServer((req, res) => {
//     if (req.method === 'POST') {
//       req.pipe(stream).pipe(res);
//     } else {
//       req.end();
//     }
//   })
//   .listen(process.argv[2]);

//HTTP CLIENT
// var http = require('http');
// var request = require('request');

// let url = 'http://localhost:8099';
// let r = request.post(url);
// process.stdin.pipe(r).pipe(process.stdout);

//WEBSOCKETS
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8099');
// stream.end('hello\n');

var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();

//ARROW FUNCTION NOT ALLOWED INSIDE THROUGH
loud
  .pipe(
    through(function(buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })
  )
  .pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
