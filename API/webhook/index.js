let postal = require('postal');
let fbConfigs = require('../../configs/facebook');
let token = fbConfigs.token;


module.exports = function(app) {
    let router = require('express').Router();


    router.get('/', (req, res, next) => {
        if (req.query['hub.verify_token'] === token) {
            res.send(req.query['hub.challenge'])
        }
        res.send('Error, wrong token');
    });


    router.post('/', (req, res, next) => {
        let message = req.body;

        if (message && message.entry) {

            message.entry.forEach((item) => {
                if (item.messaging) { // message
                    postal.publish({
                        channel: "webhook",
                        topic: "message.new",
                        data: item
                    });
                } else if (item.changes) {

                    item.changes.forEach((change) => {
                        if (change.field === 'feed') { // new comment
                            postal.publish({
                                channel: "webhook",
                                topic: "comment.new",
                                data: change
                            });
                        }
                    });

                }
            });

            res.sendStatus(200);
        } else {
            res.sendStatus(200);
        }
    });

    app.use('/webhook', router);
};
