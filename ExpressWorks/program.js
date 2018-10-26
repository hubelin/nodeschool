//HELLO WORLD
// var express = require('express');
// var app = express();
// app.get('/home', (req, res) => {
//   res.end('Hello World!');
// });
// app.listen(process.argv[2]);

//STATIC
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
const port = process.argv[2];
test = path.join(__dirname, 'public');
console.log(test);
app.listen(port);
