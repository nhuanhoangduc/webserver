let postal = require('postal');

module.exports = function(server) {
    let io = require('socket.io')(server);

    io.on('connection', function() {

    });


    // send message to client
    let messageSubscribe = postal.subscribe({
        channel: "realtime",
        topic: "message",
        callback: function(data, envelope) {
        	io.emit('message', data);
        }
    });


    // send comment to client
    let commentSubscribe = postal.subscribe({
        channel: "realtime",
        topic: "comment",
        callback: function(data, envelope) {
            io.emit('comment', data);
        }
    });
};
