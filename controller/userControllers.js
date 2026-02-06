const User = require("../models/User");
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");   // ✅ import jsonwebtoken
const secretKey = "your-secret-key";

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "user already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.status(201).json("user created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("register first");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json("invalid password");
    }

    const token = jwt.sign(
      { name: user.name, email: user.email },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token });
    console.log("User logged in:", user.name);
  } catch (err) {
    console.error(err);
    return res.status(500).json("login failed");
  }
});

router.post("/verifyToken", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ valid: false, message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ valid: false, message: "Invalid or expired token" });
    }
    res.json({ valid: true, name: decoded.name, email: decoded.email });
  });
});

module.exports = router;
