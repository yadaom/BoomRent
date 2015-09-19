var Boom = require("./packages");


Boom.server.StartUp = function () {
  this.express = require('express');
  this.port = 3000;
};

Boom.server.StartUp.prototype = {

  createApp: function () {
    this.app = this.express();
  },

  addStaticFiles: function () {
    this.app.use(this.express.static('client'));
  },

  startListening: function () {
    var server = this.app.listen(this.port, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('Start server on http://%s:%s', host, port);
    });
  },
  start: function () {
    this.createApp();
    this.addStaticFiles();
    this.startListening();
  }
};

new Boom.server.StartUp().start();