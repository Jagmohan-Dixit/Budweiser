const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        required:true
    },
    email : {
        type : String,
        maxlength : [30, "Email length should not be greater than 30"],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
},{timestamps:true}
)

mySchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id}, "JagguSecretKey", {
            expiresIn: '24h'
        });
        return token;
    } catch (err) {
        console.log(err);
    }
}

const Mydocuments = new mongoose.model("User",mySchema);

module.exports = Mydocuments;

