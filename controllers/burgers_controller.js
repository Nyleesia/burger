// Get dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


// Set up routes to queries
// Read all (get all) burgers route
  router.get("/", (req, res) => {
    burger.readAll((data) => {
      let handleBarsObject = {
        burgers: data
      };
      console.log(handleBarsObject);
      res.render("index", handleBarsObject);
    });
  });
  
// Create (insert) a burger route
  router.post("/create", (req, res) => {
    burger.createOne([
      "burgerName", "devoured"
    ], [
      req.body.burgerName, req.body.devoured
    ],
      () => {
        res.redirect("/");
      }
    );
  });

  // Update a burger route 
  router.post("/update/:id", (req, res) => {
    // Get the id of the selected burger
    let burgerId = (`id = ${req.params.id}`);
    console.log(`burger: ${burgerId}`);

    // Use id to check if state = devoured
    burger.updateOne({ 
      devoured: 1 }, burgerId, () => {
        res.redirect("/");
    });
  });

  // Delete a burger route 
  router.delete("/delete/:id", (req, res) => {
    let burgerId = (`id = ${req.params.id}`);
    console.log(`burger: ${burgerId}`);

    burger.deleteOne(burgerId, () => {
      res.redirect("/");
    });
  });

  // Export routes for use by server.js
  module.exports = router;