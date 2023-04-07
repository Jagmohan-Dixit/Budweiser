const mongoose = require('mongoose');
    
const mySchema = new mongoose.Schema({
    doctor : {
        type: String,
        trim: true,
        required: true
    },
    department : {
        type: String,
        trim: true,
        required: true
    },
    name : {
        type: String,
        trim: true,
        required: true
    },
    phoneno: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    }
},{timestamps:true}
)

const Mydocuments = new mongoose.model("Appointment",mySchema);

module.exports = Mydocuments;

