let request = require('request');
let fbConfigs = require('../../configs/facebook');
let token = fbConfigs.token;


let send = (receiveId, message, done) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {
            access_token: token,
        },
        method: 'POST',
        json: {
            recipient: {
                id: receiveId
            },
            message: {
                text: message
            },
        }
    }, (err, res, body) => {
    	done(err, res);
    });
};


module.exports = {
    send
};
