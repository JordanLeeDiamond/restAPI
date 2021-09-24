const User = require("./user.model");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ newUser, message: "New User Added" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send({ user, message: "Log In Successful" });
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(
            { email: req.body.email },
            { $set: { [req.body.key]: req.body.update } }
        );
        res.status(200).send({ message: "User Log In Information Sucessfully Updated" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ email: req.params.email });
        res.status(200).send({ message: "User Deleted" });
    } catch (error) {
        res.status(500).send(error);
    }
};