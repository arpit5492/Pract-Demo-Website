import express from "express";
import { fetchProds } from "../controllers/prodController.js";

const products = express.Router();

products.get("/getProd", async(req, res) => {
  try {
    const prodData = await fetchProds();
    res.json(prodData);
  } catch(err) {
    res.send(err);
  }
});

export default products;