var mongoose = require('mongoose');
  mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      "mongodb://localhost/PP" );
var project = require('./project');
var file = require('./file'); 



module.exports.Project = project;
module.exports.File = file;
