const router = require('express').Router();
const User = require('../models/User');
const { registerValidation } = require('../middleware/validation');
const { hashPassword } = require('../middleware/hash');

router.post("/register", async (req, res) => {
    // Check if new user data is formally valid
    const { error } = registerValidation(req.body);
    if (error) res.status(310).send(error.details[0].message);

    // Check if email already exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(311).send('Email already exists');

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

module.exports = router;