let mongoose = require('../configs/database');
let Schema = mongoose.Schema;

let notificationSchema = new Schema({
    sender_id: String,
    created_time: Date,
    updated_time: Date,
    last_message: String,
    type: {
    	type: String,
    	enum: ['comment', 'message']
    }
});
let Notifications = mongoose.model('notifications', notificationSchema);

module.exports = Notifications;
