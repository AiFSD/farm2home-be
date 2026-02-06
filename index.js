require("dotenv").config();  

const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")

const app = express();
app.use(express.json()); 
app.use(cors())

app.use("/api/products", require("./route/productroute"));
app.use("/api/feedbacks" , require("./route/feedbackroute"))
app.use("/api/users", require("./controller/userControllers"));


const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB failed", err));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
