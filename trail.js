//const { app } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();

//middleware function which converts the response json to jso
app.use(express.json());
app.listen(3000, function(){
    console.log("server started at port 3000")
});
app.post("/sample", function bodyChecker(req, res, next){
    let data = req.body;
    let length = Object.keys(data).length
    if(length == 0){
        res.end("Kindly enter data in the body")
    }else{
        next();
    }
})

app.post("/sample",function(req, res){
    console.log(req.body);
    res.end("success");
})