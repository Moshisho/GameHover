var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var widget= widgets.Widget({
	id: "mozilla-link",
	label: "Mozilla website:",
	contentURL: self.data.url("gnome_input_gaming16.ico"),
	contentScriptFile: self.data.url("click-listener.js")
	//onClick: function() {
		//tabs.open("http://www.mozilla.org/");
	//}
});

widget.port.on("left-click", function(){
	console.log("Left-Click");
});

widget.port.on("right-click", function(){
	console.log("Right-Click");
});

	