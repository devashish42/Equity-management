const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  try {
    console.log("--------------Orders Grouping --------------");
    const ord = await orders.getOrders();
    var json={};
    for(let o of ord.resp)
    {
        for(let equity in o["order_details"])
        {
            if (!(equity in json))
            json[equity]=0;
            json[equity]+=parseInt(o["order_details"][equity]);
        }
    }
    for(let o in json)
    {
      if(json[o]>=0)
      {
        console.log("Buy ",json[o]," units of ",o);
      }
      else
      {
        let sold=parseInt(json[o]);
        console.log("Sell ",sold*-1," units of ",o);
      }
        
    }
    var o={};
    o["status"]=200;
    o["body"]=json;
    res.json(o);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
