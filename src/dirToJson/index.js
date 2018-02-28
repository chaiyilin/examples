var dirToJson = require('dir-to-json');

dirToJson("../a", function (err, dirTree) {
	if (err) {
		throw err;
	} else {
		console.log(dirTree);
	}
});