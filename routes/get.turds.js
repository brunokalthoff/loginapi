const router = require('express').Router();
const Turd = require('../models/Turd');

router.get('/', async (req, res) => {

    const turds = await Turd.find();
    res.send(turds);
})

module.exports = router;