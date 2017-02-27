let postal = require('postal');

let subscribe = postal.subscribe({
    channel: "webhook",
    topic: "comment.new",
    callback: function(data, envelope) {

        // send to client
        postal.publish({
            channel: "realtime",
            topic: "comment",
            data: data
        });
    }
});