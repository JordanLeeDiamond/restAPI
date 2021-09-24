const bcrypt = require("bcryptjs");

exports.hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.pass = await bcrypt.hash(req.body.password, 8);
        }
        next();
    } catch (error) {
        res.status(500).send(error);
    }
};