const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser, getUserByUsername} = require("../db");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ibanezsecretguitarmodeldoesntmakesense";




userRouter.get('/', (req, res, next) => {
    console.log("A request is being made to /users");
    next();
  });
  
  userRouter.get('/', async (req, res, next) => {
    try {
      const users = await getAllUsers();
      res.send(users);
    } catch (error) {
      throw error;
    }
  });
  
  userRouter.post("/signup", async (req, res, next) => {
    const allUsers = await getAllUsers();
    const { username, password } = req.body;
    try {
      const checkForExistingUser = allUsers.filter(
        (users) => users.username == username
      );
      console.log("Existing user here", checkForExistingUser);
      if (checkForExistingUser.length >= 1) {
        res.send({
          error: "Invalid Credentials",
          name: "A user by that username already exists",
        });
      } else {
        const createdUser = await createUser(req.body);
        const token = jwt.sign({ username: createdUser.username }, JWT_SECRET);
        res.send({
          message: "User created!",
          user: createdUser,
          user: createdUser,
          token: token,
        });
      }
    } catch (error) {
      console.log("There was an error signing up");
      next(error);
    }
  });
  
  userRouter.post('/login', async(req, res, next) => {
    const {username, password} = req.body
    const existingUser = await getUserByUsername(username)
    console.log('Get user by username', existingUser)
    try {
      if(!existingUser) {
      res.send({
        error:"Invalid Credentials",
        message: "No user by that username exists."
      })
    }
    
      if (existingUser.password == password){
        const token = jwt.sign({username: username}, JWT_SECRET)
        res.send({
          message: "Success!",
          user: existingUser,
          token: token
        })
      }else {
        res.send({
          error:"Invalid Credentials",
          message: "Your username or password is incorrect."
        })
      }
    }catch(error) {
      console.log("There was an error loggin in at api/users/login")
    }
  
  })

  module.exports = userRouter
  