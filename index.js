//Pulse check
//Q0
const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];


app.use((req,res,next)=>{
    if(users.length === 0){
        next("err")
    }
    else{
        next()
    }
})

app.get("/users", (req, res, next) => {
  res.json(users);
});

//Q1
const logUsers =(req,res,next)=>{
console.log(users);
next()
}

app.use(logUsers)

const logMethod = (req,res,next)=>{
    console.log(req.method);
}


app.use("/users",logMethod)


app.use(express.json())

app.use((err,req,res,next)=>{
    console.log("No users");
    res.json("No users")
})


//Practice
//Q1
const auth = express.Router();
const aa = (req,res,next)=>{
    // res.json(users)
    console.log("hi");  
    next()
}
auth.get("/users",aa,(req,res)=>{
res.json(users.forEach((e,i)=>{
e
}))
})

//Q2



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});