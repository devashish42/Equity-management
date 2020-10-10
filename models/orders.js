const { pool } = require("../config");

class orders {
  static async save(req) {
    var sol = { message: "" };
    let portfolioID=req.portfolio;
    let orderDetails=req.details;
    try {
      var resp = await pool.query(
        `INSERT INTO public.orders( portfolio, order_details ) values ($1,$2)  returning *;`,[portfolioID,JSON.stringify(orderDetails)]
      );
      sol["status"] = 201;
      sol.message = "order added successfully";
      sol["resp"] = resp.rows[0];
    } catch (err) {
      console.error(err);
      //   throw err;
      sol["error"] = err;
    }
    return sol;
  }
  static async getOrders() {
    var sol = {};
    try {
      var resp = await pool.query(`SELECT * FROM public.orders`);
      sol["status"] = 201;
      sol["resp"] = resp.rows;
    } catch (err) {
      throw err;
      sol["error"] = err;
    }
    return sol;
  }

  static async resetOrders() {
    var sol = {};
    try {
      var resp = await pool.query(`TRUNCATE TABLE public.orders`);
      sol["status"] = 201;
      sol["resp"] = resp.rows;
    } catch (err) {
      throw err;
      sol["error"] = err;
    }
    return sol;
  }
  


}

module.exports = orders;
