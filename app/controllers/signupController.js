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
        
    }
};

module.exports = signupController;

