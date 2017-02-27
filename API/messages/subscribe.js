let postal = require('postal');
let messageAPI = require('./api');


let subscribe = postal.subscribe({
    channel: "webhook",
    topic: "message.new",
    callback: function(data, envelope) {
        messageAPI.save(data, function(err) {
            console.log(err)
        });

        // send to client
        postal.publish({
            channel: "realtime",
            topic: "message",
            data: data
        });
    }
});
