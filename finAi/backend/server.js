const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
// const connectDB = require("./config/db");

// import routes
// example:
// const adminRoutes = require("./routes/adminRoutes");
// const userRoutes = require("./routes/userRoutes");
// const courseRoutes = require("./routes/courseRoutes");
// const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// connect Database
// connectDB();

//Routes
// app.use("/admin", adminRoutes);
// app.use("/", userRoutes);
// app.use("/courses", courseRoutes);
// app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
