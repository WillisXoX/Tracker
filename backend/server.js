const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/trackerDB");

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');
const imageRouter = require('./routes/image');
const checkRouter = require('./routes/check');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);
app.use('/image', imageRouter);
app.use('/check', checkRouter);

app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});