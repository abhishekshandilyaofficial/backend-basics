const express = require('express');
const app = express();

//middleware function which converts the response to json
app.use(express.json());
app.listen(3000);
const authRouter = express.Router();
app.use('/auth', authRouter);
authRouter
.route('/signup')
.get(getSignup)
.post(postSignup)

function getSignup(req, res){
    res.sendFile('/index.html',{root:__dirname});
}
function postSignup(req, res){
    let obj = req.body;
    console.log('backend', obj);
    res.json({
        message:"user signed up",
        data:obj
    });
}