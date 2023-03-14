const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        required:true
    },
    phoneno : {
        type:Number,
        maxlength: [13, "Phone Number length should not be greater than 13"],
        minlength: [10, "Phone Number length should be greater than 9"],
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
        let token = jwt.sign({_id:this._id}, "JagguSecretKey");
        // this.tokens = this.tokens.concat({token : token});
        // await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// //  storing the message

// mySchema.methods.addMessage = async function(name, email, phoneno, message) {
//     try{
//         this.messages  = this.messages.concat({name, phoneno, email, message});
//         await this.save();
//         return this.messages;
//     } catch (err) {
//         console.log(err);
//     }
// }

const Mydocuments = new mongoose.model("Author",mySchema);

module.exports = Mydocuments;

