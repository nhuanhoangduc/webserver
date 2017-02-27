module.exports = function(server) {
    let io = require('socket.io')(server);

    io.on('connection', function() {
        console.log('new connection')
    });
};
