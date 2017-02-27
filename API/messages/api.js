let request = require('request');
let fbConfigs = require('../../configs/facebook');
let page_access_token = fbConfigs.page_access_token;


// https://developers.facebook.com/docs/messenger-platform/send-api-reference
let send = (receiveId, message, done) => {
    request.post({
        url: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + page_access_token,
        form: {
            recipient: {
                id: receiveId
            },
            message: {
                text: message
            },
        }
    }, (err, res) => {
        done(err, res);
    });
};


module.exports = {
    send
};
