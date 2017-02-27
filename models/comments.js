let mongoose = require('../configs/database');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    comment_id: String,
    post_id: String,
    parent_id: String,
    sender_id: String,
    sender_name: String,
    verb: String,
    message: String,
    created_time: Date,
    tags: [{ type: Schema.Types.ObjectId, ref: 'tags' }]
});
let Comments = mongoose.model('comments', commentSchema);

module.exports = Comments;
