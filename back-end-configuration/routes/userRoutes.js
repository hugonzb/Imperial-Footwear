import express from 'express';
import User from '../models/userModel';

const router = express.Router();

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