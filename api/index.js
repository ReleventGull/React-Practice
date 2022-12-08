const express = require("express");
const apiRouter = express.Router();
const { getUserByUsername } = require("../db");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ibanezsecretguitarmodeldoesntmakesense";


apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer";
  const auth = req.header("Authorization");
  if (!auth) {
    console.log("There is no token")
    next();
  } 
  else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { username } = jwt.verify(token, JWT_SECRET);
      if (username) {
        req.user = await getUserByUsername(username);
        next();
      }
    } catch (error) {
      next(error);
    }
  } else {
    
    res.send({
      name: "AuthoizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

const userRouter = require('./users')
apiRouter.use('/users', userRouter)


apiRouter.use((error, req, res, next) => {
    res.send({
        name: error.name,
        message: error.message
    })
})




module.exports = apiRouter;
