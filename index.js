const { request } = require('express');
const express = require('express')
const app = express()

//middleware
app.use(express.json());



app.post('/', function (req, res, next) {
    let a = "hello";
    n = req.body.name;

    p = req.body.name="hello ";
    console.log("this is middleware fncn 1");
    next();


}, function (req, res, next) {

    console.log("this is middleware fncn 2");
    l = req.body.name = " how ";
    next();


}, function (req, res, next) {
    console.log("this is middleware fncn 3");
    m = req.body.name = "are ";
    next();
},function (req, res, next) {
    console.log("this is middleware fncn 3");
    q = req.body.name = "you ";
    next();
},  function (req, res) {
    let o = req.body.name;
    res.send(`${p}${n}${l}${m}${q}`);
    //res.send(`${request.body.a+n+m}`)
})


app.listen(4000, function () {
    console.log(`the server is running on port 4000`);
})