var app = require('../app');

exports.index = function(req, res){
  res.render('index', { title: 'Connected to...', backends: app.backends });
};