import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/signin', async (req, res) =>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinUser){
        res.send({
            name: signinUser.name,
            email: signinUser.email,
            token: getToken(signinUser)
        })
    }else{
        res.status(401).send({msg:'Invalid Email or Password.'});
    }
})
router.get("/createuser", async (req, res) =>{
    try {
        const user = new User({
            name: 'Hugo',
            email: 'hugonzb@gmail.com',
            password: '5109978',
        });
    
        const newUser = await user.save();
        res.send(newUser);
    }catch(error){
        res.send({msg: error.message});
    }
});

export default router;