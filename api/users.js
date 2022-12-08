const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser} = require("../db");

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
  
  userRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    console.log("A request is being made to login");
    try {
      const allUsers = await getAllUsers();
      const [foundUser] = allUsers.filter((user) => user.username == username);
      if (foundUser.length < 1) {
        res.send({
          error: "Wrong Credentials",
          message: "No user with that username was found",
        });
      }
      if (password == foundUser.password) {
        const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
        console.log(token);
        res.send({
          Message: "You're successfully logged in!",
          User: foundUser,
          token: token,
        });
      } else {
        res.send({
          error: "Incorrect Credentials",
          message: "Your password or username is incorrect.",
        });
      }
    } catch (error) {
      console.log("There was an error logging in");
      throw error;
    }
  });

  module.exports = userRouter
  