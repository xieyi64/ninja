'use strict';

// The Package is past automatically as first parameter
module.exports = function(Zhidaoma, app, auth, database) {

  app.get('/zhidaoma/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/zhidaoma/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/zhidaoma/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/zhidaoma/example/render', function(req, res, next) {
    Zhidaoma.render('index', {
      package: 'zhidaoma'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
