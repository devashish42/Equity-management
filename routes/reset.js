const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  try {
    console.log("---------------Reseting Orders-------------");
    const ord = await orders.resetOrders();
    console.log(ord);
    res.json(ord);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
