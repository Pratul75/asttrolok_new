const express = require("express");
const astrologerRoutes = express.Router();
const { checkLoginOrNot } = require("../middleware/auth");
const AstrologerController = require("../controllers/asttrologers");
const { tryCatch } = require("../utils/tryCatch");

astrologerRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the astrologer routes")
})

const astroController = new AstrologerController;
// astrologerRoutes.post("/register", register)

astrologerRoutes.get("/getcharges",checkLoginOrNot,tryCatch(astroController.getcharges))


astrologerRoutes.post("/personalDetail", checkLoginOrNot, tryCatch(astroController.personalDetailUpdate))

astrologerRoutes.get("/getpersonalDetail", checkLoginOrNot,tryCatch(astroController.getpersonalDetail))

astrologerRoutes.get("/getAvailableTiming", checkLoginOrNot,tryCatch(astroController.getAvailableTiming))

astrologerRoutes.post("/setAvailableTiming",checkLoginOrNot,tryCatch(astroController.setAvailableTiming))


astrologerRoutes.get("/getAstrologerAllConsultation",checkLoginOrNot,tryCatch(astroController.getAstrologerAllConsultation))



// to get all the astrologers
astrologerRoutes.get("/getAllAstrologers",checkLoginOrNot,tryCatch(astroController.getAllAstrologers))


astrologerRoutes.get("/ratingsReviewByAstrologer",checkLoginOrNot,tryCatch(astroController.getRatingReviewByAstrologer))

astrologerRoutes.post("/updateStatusRatingAndReviews", checkLoginOrNot, tryCatch(astroController.updateRatingAndReview))






// astrologerRoutes.post("/logout", checkLoginOrNot, logout)
// astrologerRoutes.post("/changePassword", checkLoginOrNot, changePassword)
// astrologerRoutes.post("/profileSettings", checkLoginOrNot, profileSettings)
// astrologerRoutes.get("/getprofileSettings", checkLoginOrNot, getprofileSettings)
// astrologerRoutes.post("/availableTimings", checkLoginOrNot, availableTimings)
// astrologerRoutes.get("/getavailableTimings", checkLoginOrNot, getavailableTimings)
// astrologerRoutes.get("/searchBookings", checkLoginOrNot, searchBookings)
// astrologerRoutes.get("/dashboard", checkLoginOrNot, dashboard)
// // astrologerRoutes.put("/chatCallReviewRatingOfAstrologerByUsers", checkLoginOrNot, chatCallReviewRatingOfAstrologerByUsers )
// // astrologerRoutes.post("/billGenerate", checkLoginOrNot, billGenerate)


module.exports = astrologerRoutes;

