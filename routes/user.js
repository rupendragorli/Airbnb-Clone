const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get(userController.renderSignupForm) //get /signup
    .post(wrapAsync(userController.signup)); //post /signup

router
    .route("/login")
    .get(userController.renderLoginForm)   //get /login
    .post(saveRedirectUrl ,passport.authenticate("local", 
    { failureRedirect: "/login", failureFlash: true }), 
    userController.login);

//user logout
router.get("/logout", userController.logout);

module.exports = router;