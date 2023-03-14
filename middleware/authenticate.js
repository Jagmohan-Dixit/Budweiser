const jwt = require("jsonwebtoken");
const Author = require('../model/AuthorModel')

const authenticate = async (req, res, next) => {
    try{ 
        const token = req.headers.authorization.split(' ')[1];
       
        if(!token)
            console.log("token not found", token); 
        
        const verifytoken = jwt.verify(token, "JagguSecretKey");

        const rootUser = await Author.findOne({_id:verifytoken._id, "tokens.token":token});

        if(!rootUser)
            return res.status(401).send("User Not Found");

        req.token = token;
        req.rootUser = rootUser;
        req.name = rootUser.name;
        req.userid = rootUser._id; 

        next();

    } catch (err) {
        res.status(401).send("Unauthorised : No Token Provided");
        console.log(err);
    }
}

module.exports = authenticate;