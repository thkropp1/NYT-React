var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var routes = require("./routes/routes");

var app = express();


// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.use(express.static('./public'));

// Routes
app.use("/", routes);


if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/nytreact');
}


var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});


// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
