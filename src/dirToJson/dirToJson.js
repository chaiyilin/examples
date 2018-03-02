const fs = require('fs');
const path = require('path');

function dirToJson(filename) {
	var stats = fs.lstatSync(filename),
		info = {
			path: filename,
			name: path.basename(filename)
		};

	if (stats.isDirectory()) {
		info.type = "folder";
		info.children = fs.readdirSync(filename).map(function (child) {
			return dirToJson(filename + '/' + child);
		});
	} else {
		// Assuming it's a file. In real life it could be a symlink or
		// something else!
		info.type = "file";
	}

	return info;
}

if (module.parent == undefined) {
	// node dirToJson.js ~/foo/bar
	var util = require('util');
	console.log(util.inspect(dirToJson(process.argv[2]), false, null));
}