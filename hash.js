const bcrypt = require("bcryptjs");


// Hash password of newly registered user
const hashPassword = async (password, saltRounds) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    catch (err) {
        console.log(fuckoff);
    }
    return null
};


// Compare password hashes for login
const comparePasswords = async (password, hash) => {
    try {
        const matchFound = await bcrypt.compare(password, hash);
        return matchFound;
    } catch (err) {
        console.log(err);
    }
    return false;
};


module.exports.hashPassword = hashPassword;
module.exports.comparePasswords = comparePasswords;