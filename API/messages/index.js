module.exports = function(app) {
	require('./subscribe');
	require('./routes.js')(app);
};
