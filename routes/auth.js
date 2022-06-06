const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const { hashPassword, comparePasswords } = require('../hash');
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    // Check if new user data is formally valid
    const { error } = registerValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Check if email already exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash Password
    const hashedPassword = await hashPassword(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({ user: savedUser._id });
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/login', async (req, res) => {
    // Check if new user data is formally valid
    const { error } = loginValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Check if email already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('User not found');
    
    // Compare passwords
    const match = await comparePasswords(req.body.password, user.password)
    if (!match) return res.status(400).send('Passwrong wrong!')
    return res.send('Login')
});

module.exports = router;