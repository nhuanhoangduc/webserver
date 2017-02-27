let postal = require('postal');
let token = 'EAACEdEose0cBAPPXjXynBofruE7ZBNWZAt4PWdCyv4JTg9USewn0J232iQi6gqBfL2iZC3jmkCQymnJl4tQtZBDJfKRSaizfcfIRaBQ7OE4J5ftREkbE5ZCgvLfBIG38bbN5QbBLlxaJCOfEpS6FyIPi2QNsk9BuxMb4xwwSYjLzC4ofZAQJkoZASiX4FjrRZAYZD';

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

    app.use('/webhook', router);
};
