import pool from "../config/index.js";

const fetchProds = async() => {
  try {
    const [rows, fields] = await pool.query("select * from products");
    return rows;
  } catch(err) {
    console.log(err);
  }
}

export {fetchProds};