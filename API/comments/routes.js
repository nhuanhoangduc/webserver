let commentAPI = require('./api');


module.exports = function(app) {
	let router = require('express').Router();

	// Send message
    router.post('/', (req, res, next) => {
    	commentAPI.send(req.body.objectId, req.body.message, (err, r) => {
    		res.send(r)
    	});
    });


    app.use('/comment', router);
};