//const { app } = require('express');
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

let users = [
    {
        id:1,
        name:"Abhishek",
    },
    {
        id:2,
        name:"hishek",
    },
    {
        id:3,
        name:"Abhi",
    },
    {
        id:4,
        name:"shek",
    }
];

const userRouter = express.Router();
app.use('/users', userRouter);

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById);

function getUser(req, res){
    res.send(users);
}

function postUser(req, res){
    console.log(req.body);
    users = req.body;
    res.json({
        message:"data recieved successful",
        usrMsg:req.body
    })
}
function updateUser(req, res){
    console.log('req.body ->', req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key]
    }
    res.json({
        message:"data updated successfully"
    })
}
function deleteUser(req, res){
    users = {};
    res.json({
        message:"data has been deleted"
    })
}

function getUserById(req, res){
    console.log(req.params.id);
    let paramId=req.params.id;
    let obj={};
    for(let i = 0; i < users.length; i++){
        if(users[i]['id']==paramId){
            obj=users[i];
        }
    }
    console.log(obj);
    res.json({
        message:"req recieved", 
        data:obj
    })
}













