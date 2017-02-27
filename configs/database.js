var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds145379.mlab.com:45379/testapi');

module.exports = mongoose;
