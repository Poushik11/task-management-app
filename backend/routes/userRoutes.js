import express from "express";
// import {
//   registerUser,
//   loginUser,
//   getMe,
// } from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", (req, res) => res.send("register user"));
// router.post("/login", loginUser);
// router.get("/me", protect, getMe);

export default router;