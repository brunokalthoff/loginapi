const router = require('express').Router();
const User = require('../models/User');
const { loginValidation } = require('../middleware/validation');
const { comparePasswords } = require('../middleware/hash');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    // Check if new user data is formally valid
    const { error } = loginValidation(req.body);
    if (error) res.send(error.details[0].message);

    // Check if email already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send('User not found');
    
    // Compare passwords
    const match = await comparePasswords(req.body.password, user.password);
    if (!match) return res.send('Passwrong wrong!');

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 });
    res.header('Auth-Token', token).send('Login Success');
});

module.exports = router;