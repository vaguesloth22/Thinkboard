import express from "express";
import dotenv from "dotenv"; 
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
// const express = require("express"); 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: "http://localhost:5173", 
})); 
app.use(express.json());  // this middleware will parse JSON bodies: req.body
app.use(ratelimiter);
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT 5001");
  })
})