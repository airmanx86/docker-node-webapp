var http = require('http');

exports.values = function (req, res) {
    ////res.send("respond with a resource");
    var options = {
        hostname: app.get('data store hostname'),
        port: app.get('data store port'),
        path: '/api/values',
        method: 'GET'
    };
    var httpreq = http.request(options, function(httpres) {
        console.log('STATUS: ' + httpres.statusCode);
        console.log('HEADERS: ' + JSON.stringify(httpres.headers));
        httpres.setEncoding('utf8');
        httpres.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
            res.send(chunk);
        });
    });

    httpreq.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    httpreq.end();
};