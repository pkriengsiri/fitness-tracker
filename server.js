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

// Debug connection issues
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

// Use routes
app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

// Listen to ports
if(process.env.PORT) {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
}
