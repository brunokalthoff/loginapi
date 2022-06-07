const router = require('express').Router();
const User = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

router.post('/', authenticate, async (req, res) => {

    const userData = await User.findById(req.user._id);
    res.send(userData);
})


module.exports = router;