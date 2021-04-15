const { User } = require('../models');


const signupController = {
    login: (req,res) => {
        const { email, password } = req.body;   
        User.findOne({ 
            where: { 
                email: email,
                password: password 
            } 
        }).then((user) => {
        if (!user) {
            throw new Error ('Try again dude')
            }
        return (console.log('OKayyy:'))
        })
        console.log(req.body);
        
    }, 
    signup: (req, res) => {
        const signupData = req.body;
        User.create(signupData)
        .then((user) => res.json({
            success: true,
            user
        })).catch (error => {
            res.sendStatus(500).json({
                success: false,
                error: error.message
            })
        })
    }
};

module.exports = signupController;

