//MEET PIPE
// var fs = require('fs');

// var file = process.argv[2];

// fs.createReadStream(file).pipe(process.stdin);
// console.log(file);

//TRANSFORM
// var through = require('through2');
// var stream = through(write, end);
// // process.stdin.pipe(process.stdout);
// function write(buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// }

// function end(done) {
//   done();
// }

// process.stdin.pipe(stream).pipe(process.stdout);

//LINES
// var split = require('split');
// var through = require('through2');
// var count = 0;

// var tr = through(function(buf, _, next) {
//   var line = buf.toString();
//   this.push(
//     count % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n'
//   );
//   count++;
//   next();
// });

// process.stdin
//   .pipe(split())
//   .pipe(tr)
//   .pipe(process.stdout);
