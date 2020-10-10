require("dotenv").config();

const { Pool } = require("pg");

const connectionString = `postgresql://devashish:devashish1@mydb.cpkebaqsugev.us-east-2.rds.amazonaws.com:5432/crudapp`;

const pool = new Pool({
  connectionString: connectionString,
});
console.log("pool connected");

module.exports = { pool };
