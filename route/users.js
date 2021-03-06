var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../constroller/userAuth");

router.post(
    "/signup",
    [
        check("name","name should be atleast of 3 char").isLength({min:3}),
        check("email","email is required").isEmail(),
        check("password","password should be at least 3 char").isLength({min:3})
    ],
    signup
);
router.post(
    "/signin",
    [
        check("email","email is required").isEmail(),
        check("password","password field is reuired").isLength({min})
    ],
    signin
);
router.get("/signout",signout);
module.exports = router;

