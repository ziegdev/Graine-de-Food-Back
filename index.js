
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const multer = require('multer');
const bodyParser = multer();
const sanitizer = ('sanitizer');
const cors = require('cors');
const router= require('./app/router');

const bodySanitizer = require('./app/middlewares/body-sanitizer');
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(bodyParser.none());
app.use(bodySanitizer);
app.use(router);

app.listen(process.env.PORT, console.log(`App open on Port:${process.env.PORT}`));