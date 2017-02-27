let messageAPI = require('./api');


module.exports = function(app) {
	let router = require('express').Router();

	// Send message
    router.post('/', (req, res, next) => {
    	messageAPI.send(req.body.receiveId, req.body.message, (err, r) => {
    		res.send(r)
    	});
    });



    app.use('/message', router);
};
