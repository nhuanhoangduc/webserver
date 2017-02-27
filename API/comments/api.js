let request = require('request');
let fbConfigs = require('../../configs/facebook');
let page_access_token = fbConfigs.page_access_token;


// https://developers.facebook.com/docs/graph-api/reference/v2.8/comment
let send = (objectId, message, done) => {
    request.post({
        url: 'https://graph.facebook.com//v2.8/' + objectId + '/comments?access_token=' + page_access_token,
        form: {
            message: message
        }
    }, (err, res) => {
        done(err, res);
    });
};


module.exports = {
    send
};
