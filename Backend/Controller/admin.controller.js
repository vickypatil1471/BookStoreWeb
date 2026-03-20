import User from "../model/user.model.js";
import Book from "../model/book.model.js";
import Contact from "../model/contact.model.js";

/* ================= USERS ================= */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* ================= BOOKS ================= */

// ➕ Add Book
export const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      ...req.body,
      available: true, // ✅ default available
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: "Failed to add book" });
  }
};

// ❌ Delete Book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// ✏️ Edit Book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(book);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 🔁 TOGGLE AVAILABILITY 
export const toggleBookAvailability = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.available = !book.available;
    await book.save();

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update availability" });
  }
};


/* ================= CONTACTS ================= */
export const getContacts = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
