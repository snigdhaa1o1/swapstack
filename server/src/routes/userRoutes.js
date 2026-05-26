import express from "express";

import {
  createUser,
  searchUsers,
  getUserByUsername,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);

router.get("/search", searchUsers);

router.get("/:username", getUserByUsername);

export default router;