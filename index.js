const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const data = require ('./base.json')

const cors = require('cors');

app.use(cors({
    origin: "*"
}));

app.use((req,res) =>{
    res.json(data);
    console.log('data:', data)
})

app.listen(process.env.PORT, console.log(`App open on Port:${process.env.PORT}`));