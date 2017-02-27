let postal = require('postal');

module.exports = function(app) {
    let router = require('express').Router();

    router.post('/webhook', (req, res, next) => {
        let message = req.body;
        console.log(message)

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
                                data: item
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

    app.use('/', router);
};
