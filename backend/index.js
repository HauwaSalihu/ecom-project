import "dotenv/config";

import express from "express";
import cors from "cors";
import orderRoutes from "./routes/ordersRoutes.js";

import { connectToDatabase } from "./config/mongodbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: [
      "https://ecom-project-seven-liard.vercel.app/",
      "https://ecom-project-seven-liard.vercel.app",
      "http://localhost:5173/",
      "http://localhost:5173",
    ],
  })
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server running..." });
});

app.use("/api/v1/order", orderRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log("server running on " + PORT);
});
