const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); // IMPORTANT

const app = express();

app.use(express.json()); // IMPORTANT

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ROUTE CONNECT (MOST IMPORTANT)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running on port 5000"));