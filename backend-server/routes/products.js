import express from "express";

const products = express.Router();

const prods = [
  {
    id: 1,
    pName: "Jacket",
    prod_img: "https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg",
    price: 45
  },
  {
    id: 2,
    pName: "Shirt",
    prod_img: "https://m.media-amazon.com/images/I/61JELqH2RvL._AC_SX679_.jpg",
    price: 29
  },
  {
    id: 3,
    pName: "Denim Jeans",
    prod_img: "https://i.insider.com/64493a3790523900196ff87d?width=1005&format=jpeg&auto=webp",
    price: 38
  },
  {
    id: 4,
    pName: "Boots",
    prod_img: "https://m.media-amazon.com/images/I/717LvSTNqQL._AC_SY695_.jpg",
    price: 70
  },
  {
    id: 5,
    pName: "Top",
    prod_img: "https://m.media-amazon.com/images/I/51CFDAxtC3L._AC_SY879_.jpg",
    price: 43.99
  }
];

products.get("/getProd", (req, res) => {
  try {
    res.json(prods);
  } catch(err) {
    res.send(err);
  }
});

export default products;