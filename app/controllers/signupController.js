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
        res.sendStatus(401).json({
                success: false,
                error: error.message
            })
            }
        res.json({
                    success: true,
                    user
                });
        })
        
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

