const mongoose = require('mongoose');
    
const mySchema = new mongoose.Schema({
    title : {
        type: String,
        trim: true,
        required: true
    },
    likes: {
        type : Number,
        default: 0,
    },
    // likes: {
    //     type:[mongoose.Types.ObjectId],
    //     ref:'Author',
    //     required:[true,'Please provide Author']
    // },
    author: {
        type: String
        // type: mongoose.Types.ObjectId,
        // ref: 'Author',
        // trim: true,
        // required: [true,'Please Provide Author']
    }
},{timestamps:true}
)

const Mydocuments = new mongoose.model("Books",mySchema);

module.exports = Mydocuments;

