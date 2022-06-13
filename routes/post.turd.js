const router = require('express').Router();
const Turd = require('../models/Turd');
const User = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

router.post('/', authenticate, async (req, res) => {
    const { name } = await User.findById(req.user._id);
    const turd = new Turd({
        userId: req.user._id,
        userName: name,
        title: req.body.title,
        body: req.body.body,
    })
    try {
        const savedTurd = await turd.save();
        res.send(savedTurd);
    } catch (err) {
        res.status(401).send("Turd couldn't be posted");
    }
})

module.exports = router;