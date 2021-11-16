import express from "express";
import { getUsers, createUser, getUserTasks, getUser, deleteUser } from "../controllers/users.js";

const router = express.Router();


// Routes here already start in /users
router.get("/", getUsers);

router.post("/", createUser);
router.get("/:id", getUser);
router.get("/:id/tasks", getUserTasks);
router.delete("/:id", deleteUser);

export default router;