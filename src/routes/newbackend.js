var app = require('../app');

exports.addNewBackEnd = function (req, res) {
    if (req.method == 'GET') {
        app.backends.push(req.query.p);
        res.status(201);
    } else {
        res.status(204);
    }
    
    res.send();
};
