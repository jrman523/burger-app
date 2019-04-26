const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")


// routers

router.get("/", function (req, res) {

  res.redirect("/index");
});


// index page

router.get("/index", function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };

    res.render('index', hbsObject);

  })

})

// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
    res.redirect('/index');
  });
});


// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function () {
    res.redirect('/index');
  });
});
// ----------------------------------------------------



// Export routes
module.exports = router;