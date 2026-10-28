
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/LibraryDB"
    );

    console.log("MongoDB connected");
    app.listen(8000, () => console.log("Server: http://localhost:8000"));
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
