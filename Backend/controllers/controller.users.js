import { User } from "../models/model.users.js";
import logger from "../config/logger.js";
// List users with pagination, search, and sorting
export const getUsers = async (req, res) => {
  const { page = 1, limit = 100, search, sort } = req.query;
  const query = {};
  if (search) {
    query.$or = [
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
    ];
  }
  const sortOrder = sort && sort.startsWith("-") ? -1 : 1;
  const sortBy = sort ? sort.replace("-", "") : "firstName";

  try {
    const users = await User.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    logger.info("Fetched all users");
    res.status(200).json(users);
  } catch (error) {
    logger.error(`Failed to fetch users: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    logger.info(`Created new user: ${newUser.email}`);
    res.status(201).json({});
  } catch (error) {
    logger.error(`Failed to create user: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      logger.error(`Failed to find user: ${req.params.id}`);
      return res.status(404).json({ message: "User not found" });
    }
    logger.info("Fetched all users");
    res.status(200).json(user);
  } catch (error) {
    logger.error(`Failed to fetch users: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Update user details
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
