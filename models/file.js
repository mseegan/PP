var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FileSchema = new Schema({
	name: String,
	text: text
})

var File = mongoose.model('File', FileSchema);

module.exports = File;