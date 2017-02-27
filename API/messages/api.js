let request = require('request');
let fbConfigs = require('../../configs/facebook');
let page_access_token = fbConfigs.page_access_token;
let Messages = require('../../models/messages');


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


let save = (data, done) => {
    // data = {
    //     "sender": { "id": "1330789986988651" },
    //     "recipient": { "id": "1276823975742276" },
    //     "timestamp": 1488189128852,
    //     "message": { "mid": "mid.1488189128852:dcf757be71", "seq": 275, "text": "123" }
    // }

    let document = {
        message_id: data.message.mid,
        timestamp: data.timestamp,
        sender_id: data.sender.id,
        recipient_id: data.recipient.id,
        message: data.message.text
    };
    Messages.create(document, done);
};


module.exports = {
    send
};
