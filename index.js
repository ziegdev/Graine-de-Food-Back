const express = require('express');
const app = express();
const data = require ('./base.json')

const cors = require('cors');

app.use(cors({
    origin: "*"
}));

app.use((req,res) =>{
    res.json(data);
    console.log(data);
})

app.listen(3000, console.log('App open on Port:3000'));