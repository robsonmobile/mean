/**
 * Created by Sergio on 20/10/2015.
 */
var express = require('express');

module.exports = function () {
    var app = express();

    //variavel de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./app/public'));

    return app;
};
