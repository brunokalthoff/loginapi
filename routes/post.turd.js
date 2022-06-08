const router = require('express').Router();
const Turd = require('../models/Turd');
const { authenticate } = require('../middleware/authenticate');
const uuidv4 = require("uuid")

router.post('/', authenticate, async (req, res) => {
    const turd = new Turd({
        userId: req.user._id,
        turdId: '123',
        title: req.body.title,
        body: req.body.body,
    })
    try {
        const savedTurd = await turd.save();
        res.send(savedTurd);
    } catch (err) {
        res.status(401).send("Turd couldnt be posted")
    }
})

module.exports = router;