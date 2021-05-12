//Pulse check
//Q0
const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];

app.use((req, res, next) => {
  if (users.length === 0) {
    next("err");
  } else {
    next();
  }
});

app.get("/users", (req, res, next) => {
  res.json(users);
});

const logUsers = (req, res, next) => {
  console.log(users);
  next();
};

app.use(logUsers);

const logMethod = (req, res, next) => {
  console.log(req.method);
};

app.use("/users", logMethod);

app.use(express.json());

app.use((err, req, res, next) => {
  console.log("No users");
  res.json("No users");
});

//Practice
//Q1
const auth = express.Router();
auth.get("/users", (req, res, next) => {
  res.json(users);
});

// app.use("/auth", auth);


//Q2
auth.post("/users/create",(req,res,next)=>{
   const name = req.body.name
   users.push(name)
res.json(users)
})

//Q3








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
