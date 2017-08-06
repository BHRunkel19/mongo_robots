const express = require('express');
const routes = express.Router();
const database = require('../database');

routes.get('/', (req, res) => {
  let collection = database.get().collection('directory');

  collection.find({}).toArray((err, directory) => {
    res.render('home', {users: directory});
  });
});

routes.get('/:username', (req, res) => {
  let coll = database.get().collection('directory');

  coll.findOne({username: req.params.username}, (err, robot) => {
    res.render('index', robot);
  });
});

module.exports = routes;
