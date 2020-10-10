const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.post("/", async (req, res) => {
  console.log("Posting ");
  console.log("post req ",req.body);
  try {
    const a1 = await orders.save(req.body);
    console.log("Posted ");
    res.json(a1);

  } catch (err) {
    res.send("Error");
  }
});
router.get("/", async (req, res) => {
  try {
    console.log("---------------orders-------------");
    const ord = await orders.getOrders();
    console.log(ord);
    res.json(ord);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
