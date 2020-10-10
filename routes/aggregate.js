const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  try {
    const ord = await orders.getOrders();
    var json={};
    console.log(" ----------Aggregated Order------------- ");
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
            if(json[o]%10)
            json[o]=10*( parseInt(json[o]/10) +1 );
            console.log("Buy ",json[o]," units of ",o);
        }
        else
        {
            if(json[o]%10)
            json[o]=10*(parseInt(json[o]/10));

            let sold=parseInt(json[o]);
            console.log("Sell ",sold*-1," units of ",o);
        }
    }
    var response={};
    response["status"]=200;
    response["body"]=json;

    //const resetObj=orders.resetOrders();
    //response["resetDetails"]=resetObj;
    res.json(response);
  } catch (err) {
    res.send(" Error " + err);
  }
});

module.exports = router;
