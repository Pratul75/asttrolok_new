const express = require("express");
const userRoutes = express.Router();

const { checkLoginOrNot } = require("../middleware/auth");
const UserController = require("../controllers/user");
const GlobalController = require("../controllers/globalController");
const errorHandler = require("../middleware/errorhandler");
const { tryCatch } = require("../utils/tryCatch");


const userController = new UserController;

const globalController = new GlobalController;



userRoutes.get("/", checkLoginOrNot,(req, res) => {
    res.status(400).send("welcome to the user routes")
})




userRoutes.post("/personalDetail", checkLoginOrNot,tryCatch(userController.personalDetailUpdate),errorHandler)

userRoutes.post("/familyDetailUpate", checkLoginOrNot,tryCatch(userController.familyDetailUpdate),errorHandler)

userRoutes.get("/getpersonalDetail", checkLoginOrNot,tryCatch(userController.getpersonalDetail),errorHandler)


userRoutes.get("/getAstrologerAllConsultation", checkLoginOrNot,tryCatch(userController.getAstrologerAllConsultation),errorHandler)

userRoutes.post("/bookAstrologerForConsultation", checkLoginOrNot, tryCatch(userController.bookAstrologerForConsultation), errorHandler)

userRoutes.post("/availableTimingOfDate", checkLoginOrNot,tryCatch(userController.availableTimingOfDate), errorHandler)

userRoutes.get("/getWallet", checkLoginOrNot,tryCatch(userController.getWallet), errorHandler)


userRoutes.post("/addMoneyTowallet", checkLoginOrNot,tryCatch(userController.addMoneyTowallet), errorHandler)


// this route is automatically hit when user is register
userRoutes.post("/createWallet", checkLoginOrNot,tryCatch(userController.createWallet), errorHandler)


userRoutes.get("/allConsultationsOfUser",checkLoginOrNot, tryCatch(userController.getAllConsultationOfUser), errorHandler)

userRoutes.post("/ratingsAndReview",checkLoginOrNot, tryCatch(userController.createRatingsAndReview), errorHandler)

userRoutes.get("/ratingsReviewByUser", checkLoginOrNot,tryCatch(userController.getRatingReviewByUser), errorHandler)





// userRoutes.post("/booking", checkLoginOrNot, booking)


module.exports = userRoutes

