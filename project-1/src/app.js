const express = require("express");
const multer = require("multer");
const uploadFile = require("./service/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    // Validate required fields
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    if (!req.body.text || req.body.text.trim() === "") {
      return res.status(400).json({
        message: "Caption text is required",
      });
    }

    console.log(req.body);
    console.log(req.file);

    // Upload image to ImageKit
    const result = await uploadFile(req.file.buffer);

    // Create post in database
    const post = await postModel.create({
      image: result.url,
      caption: req.body.text,
    });

    res.status(201).json({
      message: "post created succesfully",
      post,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      message: "Error creating post",
      error: error.message,
    });
  }
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "posts fetched succesfully",
    posts,
  });
});

module.exports = app;