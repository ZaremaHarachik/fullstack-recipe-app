const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/users.cjs');
const recipesRouter = require('./routes/recipes.cjs');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

dotenv.config();

const start = async () => {
    try {
           await mongoose.connect(`mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.ui6u8mn.mongodb.net/`);
            app.listen(PORT, () => {
                console.log(`Server was started on http://localhost:${PORT}`)
            })
    } catch (e) {
        console.error(e)
    }
}

// 

start();
