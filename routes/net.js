const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  try {
    console.log("get orders in net");
    const ord = await orders.getOrders();
    console.log("orders are ",ord);

    var json={};

    for(var o of ord.resp)
    {
        for(var equity in o["order_details"])
        {
            console.log(equity," = ",o["order_details"][equity]);
            if (!(equity in json))
            json[equity]=0;
            json[equity]+=parseInt(o["order_details"][equity]);
        }
    }
    console.log("json is ",json);

    res.json(json);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
