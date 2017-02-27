let request = require('request');
let fbConfigs = require('../../configs/facebook');
let page_access_token = fbConfigs.page_access_token;
let Comments = require('../../models/comments');


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


let save = (data, done) => {
    // data = {
    //     "field": "feed",
    //     "value": {
    //         "item": "comment",
    //         "sender_name": "Hinh Nhu",
    //         "comment_id": "1276923255732348_1277132182378122",
    //         "sender_id": 418884518460188,
    //         "post_id": "1276823975742276_1276923255732348",
    //         "verb": "add",
    //         "parent_id": "1276923255732348_1277100335714640",
    //         "created_time": 1488190190,
    //         "message": "123123"
    //     }
    // }

    let document = {
        comment_id: data.value.comment_id,
        post_id: data.value.post_id,
        parent_id: data.value.parent_id,
        sender_id: data.value.sender_id,
        sender_name: data.value.sender_name,
        verb: data.value.verb,
        message: data.value.message,
        created_time: data.value.message
    };
    Comments.create(document, done);
};


module.exports = {
    send
};
