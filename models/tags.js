let mongoose = require('../configs/database');
let Schema = mongoose.Schema;

let tagSchema = new Schema({
    name: String,
    created_time: Date
});
let Tags = mongoose.model('tags', tagSchema);

module.exports = Tags;
