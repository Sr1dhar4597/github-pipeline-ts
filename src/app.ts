import express from "express";
import { config } from "dotenv";

const envFile = `.env.${process.env.NODE_ENV || "dev"}`;
config({ path: envFile }); // Load environment variables from.env file

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hey, I am from Git!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
