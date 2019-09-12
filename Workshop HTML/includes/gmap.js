 function createAttribute(obj, name, value) {
	var attr = document.createAttribute(name);
	attr.value = value;
	obj.attributes.setNamedItem(attr);
}

function gmap(address) {
	var frame = document.createElement("iframe");

	createAttribute(frame, "width", "500");
	createAttribute(frame, "height", "450");
	createAttribute(frame, "frameborder", "0");
	createAttribute(frame, "style", "border:0");
	createAttribute(frame, "src",
		"https://www.google.com/maps/embed/v1/place?q="
			+ encodeURI(address)
			+ "&key=AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI"
			);

	document.body.appendChild(frame);
}