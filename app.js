const express = require("express");

const app = express();

app.use(express.json());

const orderRouter = require("./routes/orders");
const netRouter = require("./routes/net");
const aggregateRouter = require("./routes/aggregate");
const resetRouter = require("./routes/reset");


app.use("/orders", orderRouter);
app.use("/net", netRouter);
app.use("/aggregate", aggregateRouter);
app.use("/reset", resetRouter);

app.listen(5000, () => {
  console.log("Server started");
});

module.exports = app;