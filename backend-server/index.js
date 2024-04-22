import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import products from "./routes/products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware functions
app.use(morgan("dev"));
app.use("/", products);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});