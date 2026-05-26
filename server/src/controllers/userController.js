import User from "../models/User.js";

// Create User
export const createUser = async (req, res) => {
  try {

    const {
      fullName,
      username,
      bio,
      skillsHave,
      skillsWant,
      availability,
    } = req.body;

    // Check existing username
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username already taken",
      });
    }

    const user = await User.create({
      fullName,
      username,
      bio,
      skillsHave,
      skillsWant,
      availability,
    });

    res.status(201).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Search Users
export const searchUsers = async (req, res) => {
  try {

    const query = req.query.username || "";

    const users = await User.find({
      username: {
        $regex: query,
        $options: "i",
      },
    }).select("fullName username bio");

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getUserByUsername = async (req, res) => {
  try {

    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};