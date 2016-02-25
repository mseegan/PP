var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var File = require('./file');

var projectSchema = new Schema({
	createdAt: { type: Date, default: Date.now },
	projectName: {type: String, default: "new project"},
	text: {type: String, default: "enter code here"}
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;