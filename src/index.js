const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;
const { add } = require('./arithematica')
app.use(cors());

app.get('/add/:num1/:num2', (req, res)=>{
    res.status(200).send({'result' : add(Number(req.params.num1), Number(req.params.num2))})
})
app.get('/',(req, res)=>{
    res.send('Arithematic service');
})
app.listen(port);