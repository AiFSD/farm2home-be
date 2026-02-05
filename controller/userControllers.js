const User = require("../models/User");

exports.createUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user, 
    });
    console.log(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
