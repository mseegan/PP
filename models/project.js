var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var File = require('./file');

var ProjectSchema = new ProjectSchema({
	createdAt: Date,
	projectName: String,
	files:[fileSchema]
})

var Project = mongoose.model('Project', ProjectSchema)
module.exports = Project;