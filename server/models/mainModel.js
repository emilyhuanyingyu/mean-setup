var mongoose = require('mongoose');

let PetSchema = new mongoose.Schema({
    
        name:{ type:String, required:[true,'Pet name is required'],minlength:[3,'At least 3 characters for pet name'], unique:[true,'This name has already registered']},
    
        type:{ type:String, required:[true,'Pet type is required'], minlength:[3,'At least 3 characters for pet type']},
    
        description:{ type:String, required:[true,'Pet type is required'], minlength:[3,'At least 3 characters for pet type']},
    
        like: {type:Number, default:0},
    
        skillone: {type:String},
    
        skilltwo: {type:String},
    
        skillthree: {type:String}
    },
    { timestamps: true },
);

let Pet = mongoose.model("Pet", PetSchema);