const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.post("/", async (req, res) => {
  console.log("working");
  console.log("post req ",req.body);
  try {
    const a1 = await orders.save(req.body);
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
router.get("/", async (req, res) => {
  try {
    console.log("get orders");
    const ord = await orders.getOrders();
    res.json(ord);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
