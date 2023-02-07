const router = require("express").Router();
const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')


/* GET home page */
router.get("/", (req, res,) => {
  res.render("index");
});

router.get("/main", (req, res,) => {
  res.render("main");
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile',{ user: req.session.user })
})



module.exports = router;
