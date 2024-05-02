import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import BookRoutes from "./routes/BookRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/books", BookRoutes);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
