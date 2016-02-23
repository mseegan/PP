var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var File = require('./file');

var projectSchema = new Schema({
	createdAt: Date,
	projectName: String,
	files: [ File.schema ]
})

var Project = mongoose.model('Project', projectSchema)
module.exports = Project;