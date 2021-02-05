// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Express server port
const PORT = process.env.PORT || 3000;

// Express instance
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Use routes
app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

// Listen to ports
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
