let postal = require('postal');
let Comments = require('../../models/comments');


let subscribe = postal.subscribe({
    channel: "webhook",
    topic: "comment.new",
    callback: function(data, envelope) {

        // Save db
        // Comments.save(data, function() {});

        // send to client
        postal.publish({
            channel: "realtime",
            topic: "comment",
            data: data
        });
    }
});
