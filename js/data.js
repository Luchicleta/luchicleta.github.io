function loadJSON(url, callback) {
	console.log("Requesting data: " + url);
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', url, true);
	// Replace 'my_data' with the path to your file
	xobj.onload = function() {
		callback(JSON.parse(xobj.responseText));
	};
	xobj.send();
}
