import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookForm({ refresh }) {
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/admin/book", book);
      toast.success("Book added successfully ✅");

      setBook({
        name: "",
        author: "",
        price: "",
        category: "",
        image: ""
      });

      refresh(); //  refresh list
    } catch (err) {
      console.error(err);
      toast.error("Failed to add book ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow p-6">
      <h2 className="text-xl font-semibold mb-4">➕ Add New Book</h2>

      <div className="grid md:grid-cols-5 gap-4">
        <input
          name="name"
          value={book.name}
          onChange={handleChange}
          placeholder="Book Name"
          className="input input-bordered"
          required
        />
        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          className="input input-bordered"
          required
        />
        <input
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="input input-bordered"
          required
        />
        <input
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered"
        />
        <input
          name="image"
          value={book.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered"
        />
      </div>

      <button className="btn btn-primary mt-4">Add Book</button>
    </form>
  );
}
