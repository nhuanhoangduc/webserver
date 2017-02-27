var socket = io('/');

socket.on('message', function(data) {
	var div = document.createElement("div");
	div.innerHTML = 'Message: ' + JSON.stringify(data);

	var br = document.createElement("br");

	document.getElementsByTagName('body')[0].appendChild(div);
	document.getElementsByTagName('body')[0].appendChild(br);
	document.getElementsByTagName('body')[0].appendChild(br);
});

socket.on('comment', function(data) {
	var div = document.createElement("div");
	div.innerHTML = 'Comment: ' + JSON.stringify(data);

	var br = document.createElement("br");

	document.getElementsByTagName('body')[0].appendChild(div);
	document.getElementsByTagName('body')[0].appendChild(br);
	document.getElementsByTagName('body')[0].appendChild(br);
});
