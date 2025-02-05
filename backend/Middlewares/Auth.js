//check authetication

const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.header['authorization'];

    if(!auth){
        return res.status(403)
        .json({message:'Unauthorized , JWT TOKEN is required'});
    }

    try{
        const decode = jwt.verify(auth, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch(err){
        return res.status(403)
        .json({message : "Unauthorized , JWT is wrong/expired"});
    }
}

module.exports = ensureAuthenticated;