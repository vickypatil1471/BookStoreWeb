import express from "express";
import {
  getAllUsers,
  addBook,
  deleteBook,
  updateBook,
  toggleBookAvailability,
  getContacts,
} from "../Controller/admin.controller.js";
import Book from "../model/book.model.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/book", addBook);
router.delete("/book/:id", deleteBook);
router.put("/book/:id", updateBook);

// ✅ NEW ROUTE
router.patch("/book/:id/availability", toggleBookAvailability);

router.get("/contacts", getContacts);

router.get("/book", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

export default router;
