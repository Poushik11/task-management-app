import express from "express";
const router = express.Router();

import {
  getTickets,
  getTicket,
  createTicket,
  createCollaborativeTicket,
  getUserTickets,
  deleteTicket,
  updateTicket,
} from "../controllers/ticketController.js";

import protect from "../middleware/authMiddleware.js";

// const noteRouter = require("./noteRoutes");
// router.use("/:ticketId/notes", noteRouter);

router.route("/").get(protect, getTickets).post(protect, createTicket);
// router.post("/collaborative", protect, createCollaborativeTicket);
router.get("/myTickets", protect, getUserTickets);
router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

export default router;
