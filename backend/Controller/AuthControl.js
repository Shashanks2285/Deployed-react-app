//api and verification of authetication request and responses

const bcrypt =require('bcrypt');
const UserModel = require('../Modal/User_schema');
const jwt = require('jsonwebtoken');

//signup api
const signup = async(req,res)=>{
    try{
        const {name ,email,password} =req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:`Email is already use, try signIn`, success:false});
        }
        const newUser = new UserModel({name,email,password});
        newUser.password = await bcrypt.hash(password,10);//encrypt thr password
        await newUser.save();//saved in DB
        res.status(201)
            .json({
                message: "Signup Done",
                success: true
            })
        
    }catch(err){
        console.log(err);
        res.status(500)
            .json({
                message: "Internal Error",
                success: false
            })
    }

}

//login api
// const login = async(req,res)=>{
//     try{
//         const {email,password} =req.body;
//         const user = await UserModel.findOne({email});
//         const eMssg = 'Authentication failed : Wrong email / Wrong Passwrod';
//         if(!user){//user entered wrong email
//             return res.status(403)
//             .json({message:eMssg, success:false});
//         }
//         //verify psswd
//         const checkPasswd = await bcrypt.compare(password, user.password);
        
//         if(!checkPasswd){//user entered wrong psswd
//             return res.status(403)
//             .json({message:eMssg, success:false});
//         }
//         //crate jwt token
//         const jwtToken = jwt.sign(
//             {email:user.email , _id:user._id},
//             process.env.JWT_SECRET_KEY,
//             {expiresIn:'24h'}
//         )
//         res.status(200)
//             .json({
//                 message: "Login Done",
//                 success: true,
//                 jwtToken,
//                 email,
//                 name :user.name
//             })
        
//     }catch(err){
//         res.status(500)
//             .json({
//                 message: "Internal Error",
//                 success: false
//             })
//     }

// }

// login API in AuthController.js
const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const eMssg = 'Authentication failed: Wrong email / Wrong password';
        
        if (!user) {
            return res.status(403).json({ message: eMssg, success: false });
        }
        
        // Verify password
        const checkPasswd = await bcrypt.compare(password, user.password);
        
        if (!checkPasswd) {
            return res.status(403).json({ message: eMssg, success: false });
        }
        
        // Create JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Done",
            success: true,
            jwtToken,
            email,
            name: user.name,
            userId: user._id  // Add userId here
        });

    } catch (err) {
        res.status(500).json({
            message: "Internal Error",
            success: false
        });
    }
};


module.exports={
    signup,
    login
}