const router = require('express').Router();
const { authenticate } = require('../middleware/authenticate');
const User = require('../models/User');
const Turd = require('../models/Turd');

router.post('/profile', authenticate, async (req, res) => {
    try {
        const userData = await User.findById(req.user._id);
        const UserTurds = await Turd.find({ userId: req.user._id });
        res.send({ userData, UserTurds });
    } catch (err) {
        res.status(401).send("Cannot load user data");
    }
})

module.exports = router;