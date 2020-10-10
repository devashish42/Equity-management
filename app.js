const express = require("express");

const app = express();

app.use(express.json());

const orderRouter = require("./routes/orders");
const netRouter = require("./routes/net");



app.use("/orders", orderRouter);
app.use("/net", netRouter);


app.listen(5000, () => {
  console.log("Server started");
});
