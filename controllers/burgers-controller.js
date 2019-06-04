const express = require("express");
const burgerORM = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burgerORM.selectAll(function(data) {
        res.render("index", {burger:data});
 });
});

router.post("/", function(req, res) {
    burgerORM.insertOne(req.body.burger, function(result) {
        console.log(result);
        res.redirect("/");
  });
});

router.put("/:id", function(req,res) {
    burgerORM.updateOne(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
  });
});

router.delete("/:id", function(req,res) {
    burgerORM.deleteOne(req.params.id, function(result) {
      res.redirect("/");
    });
});

module.exports = router;