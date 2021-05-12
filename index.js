//Pulse check
//Q0
const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];
app.use(express.json())


app.get("/users", (req, res, next) => {
  res.json(users);
});

//Q1
const logUsers =(req,res,next)=>{
console.log(users);
next()
}

//Q2

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});