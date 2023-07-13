const express = require('express');
const  Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/Users.cjs")

const router = express.Router();
 
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ username });
    console.log(user);

    if (user) {
        return res.json({ message: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({ message: "User doesn't Exist!" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({ message: "Username or Password is Incorrect!" })
    }

    const token = Jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
});



module.exports = router;