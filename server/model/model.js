const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Quotes : {
        type : String,
        required: true,
        unique: true
    },
    Name : {
        type: String,
        required: true,
        
    },
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;