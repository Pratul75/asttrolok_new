const express = require("express");
const  AuthController  = require("../controllers/authController");
const { register } = require("../controllers/user");
const { tryCatch } = require("../utils/tryCatch");
const errorHandler = require("../middleware/errorhandler");
const authRoutes = express.Router();


authRoutes.get("/welcome",function(req,res){
    res.send("its a welcome route")
})

const auth = new AuthController;

 authRoutes.post("/register", auth.register);
 authRoutes.post("/login",tryCatch(auth.login),errorHandler);
  

module.exports = authRoutes;

