const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require ("express")
const router = require("express").Router();

/* GET auth page */
router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/"), async(req,res) => {
    const body = {...req.body}
    const salt = bcrypt.genSaltSync(13)
    const passwordHash = bcrypt.hashSync(body.password, salt)
    console.log (passwordHash)

    delete body.password
    body.passwordHash = passwordHash

    try{
        console.log ("working?")
     await User.create(body)
     res.send (body)
    }
    catch (error){console.log(error)

    }
}

module.exports = router;