let postal = require('postal');

let subscribe = postal.subscribe({
    channel: "webhook",
    topic: "message.new",
    callback: function(data, envelope) {

        // send to client
        postal.publish({
            channel: "realtime",
            topic: "message",
            data: data
        });
    }
});
