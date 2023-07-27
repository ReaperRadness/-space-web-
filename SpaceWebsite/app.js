// app.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// app.js
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// app.js
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
  
// app.js
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public")); // Assuming your frontend files are in a "public" folder

// More server-side code will be added later

// app.js
const NewsArticle = require("./models/newsArticle");

// API route to fetch latest news articles
app.get("/api/latest-news", async (req, res) => {
  try {
    const latestNews = await NewsArticle.find().sort({ date: -1 }).limit(5);
    res.json(latestNews);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch latest news" });
  }
});

// app.js
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.js
// Assuming you have already defined the NewsArticle model
// app.js
app.post("/api/submit-article", async (req, res) => {
    try {
      const { title, author, date, content } = req.body;
      const newArticle = new NewsArticle({ title, author, date, content });
      await newArticle.save();
      res.status(201).json({ message: "Article submitted successfully" });
    } catch (error) {
      console.error("Error submitting article:", error); // Add this line to log the error
      res.status(500).json({ error: "Error submitting article" });
    }
  });
  
  