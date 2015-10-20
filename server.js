/**
 * Created by Sergio on 20/10/2015.
 */
var http = require('http');
var app = require('./app/config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando a porta ' + app.get('port'));
});