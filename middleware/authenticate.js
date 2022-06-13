const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Auth-Token');
    if (!token) res.status(401).send("Access denied. No token in header");
    
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch(err){
        if (err.name === "TokenExpiredError") res.status(400).send("Timout. Please login again");
        res.status(400).send("Invalid token");
    }
}

module.exports.authenticate = authenticate;