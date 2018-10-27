//HELLO WORLD
// var express = require('express');
// var app = express();
// app.get('/home', (req, res) => {
//   res.end('Hello World!');
// });
// app.listen(process.argv[2]);

//STATIC
// var express = require('express');
// var app = express();
// var path = require('path');
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
// const port = process.argv[2];
// test = path.join(__dirname, 'public');
// console.log(test);
// app.listen(port);

//PUG
// var express = require('express');
// var app = express();
// var path = require('path');

// app.set('views', process.argv[3]);
// app.set('view engine', 'pug');

// app.get('/home', (req, res) => {
//   res.render('index', { date: new Date().toDateString() });
// });

// app.listen(process.argv[2]);

//GOOD OLD FORM
// var express = require('express');
// var app = express();
// var bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({ extended: false }));

// app.post('/form', (req, res) => {
//   result = req.body.str
//     .split('')
//     .reverse()
//     .join('');
//   res.end(result);
// });
// app.listen(process.argv[2]);

//STYLISH CSS
var express = require('express');
var app = express();
app.use(
  require('stylus').middleware(
    process.argv[3] || path.join(__dirname, 'public')
  )
);
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
