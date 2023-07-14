const express = require('express');
const mongoose = require('mongoose');
const UserModel = require("../models/Users.cjs");
const RecipeModel = require("../models/Recipes.cjs");


const router = express.Router();
 router.get("/", async (req, res) => {
    try {
       const response = await RecipeModel.find({});
       res.json(response);
    }catch(err) {
        res.json(err);
    }
 });

module.exports = router;