let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// change database name below
mongoose.connect('mongodb://localhost/Pet');
// or
// mongoose.connect('mongodb://localhost/Pet', {useMongoClient: true}); 







const fs = require('fs');
const path = require('path');
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
	    require(models_path + '/' + file);
	}
})


// const Pet = mongoose.model('Pet');