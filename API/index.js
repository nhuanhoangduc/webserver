module.exports = function(app) {
    require('./comments')(app);
    require('./messages')(app);
    require('./webhook')(app);
};
