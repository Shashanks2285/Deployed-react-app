//define schema for the dB

const mongoose = require('mongoose');

//make schema
const Schema = mongoose.Schema;
//define schema


const UserSchema =  new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique :true
    },
    password:{
        type: String,
        required: true,
    }
    
});
//set the collection on DB
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;