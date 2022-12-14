const express = require("express");
const apiRouter = express.Router();
const { getUserByUsername } = require("../db");

const jwt = require("jsonwebtoken");


apiRouter.use(async (req, res, next) => {
console.log('The secret is here', process.env.JWT_SECRET)
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  if (!auth) {
    
    next();
  } 
  else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    console.log(token)
    try {
      const username = jwt.verify(token, process.env.JWT_SECRET);
      console.log('The username is here', username)
      if (username) {
        req.user = await getUserByUsername(username);
        console.log('The request user or something', req.user)
        next();
      }
    } catch (error) {
      console.log(error)
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
const clothingRouter = require('./clothing')
apiRouter.use('/users', userRouter)
apiRouter.use('/clothing', clothingRouter)


apiRouter.use((error, req, res, next) => {
    res.send({
        name: error.name,
        message: error.message
    })
})




module.exports = apiRouter;
