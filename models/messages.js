let mongoose = require('../configs/database');
let Schema = mongoose.Schema;

let messageSchema = new Schema({
    message_id: String,
    time: Date,
    timestamp: Date,
    sender_id: String,
    recipient_id: String,
    message: String,
    tags: [{ type: Schema.Types.ObjectId, ref: 'tags' }]
});
let Messages = mongoose.model('messages', messageSchema);

module.exports = Messages;
