import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export default function EditBookModal({ book, close, refresh }) {
  const [form, setForm] = useState({
    name: book.name || "",
    author: book.author || "",
    price: book.price || "",
    category: book.category || "",
    image: book.image || ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateBook = async () => {
    try {
      await api.put(`/admin/book/${book._id}`, form);
      toast.success("Book updated successfully ✅");
      refresh();
      close();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update book ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-base-200 bg-opacity-90 flex justify-center items-center z-50">
      <div className="card bg-base-100 p-6 w-96 shadow-xl relative">

        <button
          onClick={close}
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost"
          title="Close"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-bold mb-4">✏ Edit Book</h2>

        <input
          name="name"
          className="input input-bordered mb-3 w-full"
          placeholder="Book Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="author"
          className="input input-bordered mb-3 w-full"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          className="input input-bordered mb-3 w-full"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="category"
          className="input input-bordered mb-3 w-full"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="image"
          className="input input-bordered mb-4 w-full"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2">
          <button className="btn btn-outline" onClick={close}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={updateBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
