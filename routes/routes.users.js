import express from "express"
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/controller.users.js";

const router = express.Router();

router.route("/users").get(getUsers).post(createUser);

router.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
