var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fileSchema = new Schema({
	name: String,
	text: String
})

var File = mongoose.model('File', fileSchema);

module.exports = File;