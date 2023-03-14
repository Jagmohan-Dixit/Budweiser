const mongoose = require('mongoose');
    
const mySchema = new mongoose.Schema({
    title : {
        type: String,
        trim: true,
        required: true
    },

    // You can change likes type to array of ObjectId for storing objectID of authors
    // so that you can easily make relations for iterating in DB. For Postman testing purpose i use Number in it

    likes: {
        type : Number,
        default: 0,
        // type:[mongoose.Types.ObjectId],
        // ref:'Author',
    },

    // You can change author type to ObjectId for making relations in MongoDb for 
    // Postman testing purpose i use string
    
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

