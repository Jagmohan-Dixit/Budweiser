const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost/merndb', {
//     // useNewUrlParser:true,
//     // useCreateIndex:true,
//     // useUnifiedTopology:true,
//     // useFindAndModify:false 
// }).then(
//     () =>{
//         console.log("Database Connected Successful");
//     }).catch((err) => {
//         console.log(err);
//     }
// );


mongoose.connect("YOUR_MONGO_URL", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
    console.error(err);
    });
