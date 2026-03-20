import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  category: String,
  image: String,

  
  available: {
    type: Boolean,
    default: true
  }
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
