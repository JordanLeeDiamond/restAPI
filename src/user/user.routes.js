const { Router } = require("express");
const {
    addUser,
    login,
    updateUser,
    deleteUser,
} = require("./user.controller");

const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/user/login", login);
userRouter.put("/user", hashPassword, updateUser);
userRouter.delete("/user/:email", deleteUser);

module.exports = userRouter;