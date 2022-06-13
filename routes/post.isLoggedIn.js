const router = require('express').Router();
const { authenticate } = require('../middleware/authenticate');

router.get('/isloggedin', authenticate, async (req, res) => {
        res.send(true);
})

module.exports = router;