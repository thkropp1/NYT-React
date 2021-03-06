var express = require("express");
var path = require("path");

var Article = require('../models/Article.js');


var app = new express.Router();

// Home page
app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
})

// Return all saved articles from the database
app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    })
});

// Update database with article marked as saved
app.post('/api/saved', function(req, res) {

  var newArticle = new Article({
    title: req.body.title,

    // Article's published date
    //date: req.body.date,

    // Date article was saved.
    date: Date.now(),
    url: req.body.url
  });

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });

});

// Delete article marked as saved from the database
app.delete('/api/saved/:id', function(req, res) {

  Article.find({
      '_id': req.params.id
    }).remove()
    .exec(function(err, doc) {
      res.send(doc);
    });

});

module.exports = app;
