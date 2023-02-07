const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get('/profile', (req, res) => {
  res.render('profile')
})

module.exports = router;
