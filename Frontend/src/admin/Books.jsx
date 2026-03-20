import { useEffect, useState } from "react";
import api from "../utils/api";
import BookForm from "./BookForm";
import EditBookModal from "./EditBookModal";
import { useAdminSearch } from "../context/adminSearchProvider";
import toast from "react-hot-toast";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // ⭐ NEW

  const { adminSearchTerm, setAdminSearchTerm } = useAdminSearch();

  const fetchBooks = async () => {
    try {
      const res = await api.get("/admin/book");
      setBooks(res.data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    await api.delete(`/admin/book/${id}`);
    toast.success("Book deleted");
    fetchBooks();
  };

  const toggleAvailability = async (id) => {
    try {
      await api.patch(`/admin/book/${id}/availability`);
      fetchBooks();
    } catch (error) {
      toast.error("Failed to update availability"+error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredBooks = books
    .filter((book) =>
      book.name.toLowerCase().includes(adminSearchTerm.toLowerCase())
    )
    .filter((book) => {
      if (filter === "available") return book.available;
      if (filter === "hidden") return !book.available;
      return true;
    });

  /* ================= STATS ================= */
  const totalBooks = books.length;
  const availableBooks = books.filter((b) => b.available).length;
  const hiddenBooks = books.filter((b) => !b.available).length;

  if (loading) return <p className="text-center">Loading books...</p>;

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">📚 Manage Books</h1>

        <input
          type="search"
          placeholder="Search book by name..."
          value={adminSearchTerm}
          onChange={(e) => setAdminSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-72"
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="stat bg-base-100 shadow rounded-lg">
          <div className="stat-title">Total</div>
          <div className="stat-value">{totalBooks}</div>
        </div>
        <div className="stat bg-base-100 shadow rounded-lg">
          <div className="stat-title">Available</div>
          <div className="stat-value text-success">{availableBooks}</div>
        </div>
        <div className="stat bg-base-100 shadow rounded-lg">
          <div className="stat-title">Hidden</div>
          <div className="stat-value text-error">{hiddenBooks}</div>
        </div>
      </div>

      {/* FILTER TABS ⭐ */}
      <div className="flex gap-2 mb-6">
        <button
          className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`btn btn-sm ${
            filter === "available" ? "btn-success" : "btn-outline"
          }`}
          onClick={() => setFilter("available")}
        >
          Available
        </button>

        <button
          className={`btn btn-sm ${
            filter === "hidden" ? "btn-error" : "btn-outline"
          }`}
          onClick={() => setFilter("hidden")}
        >
          Hidden
        </button>
      </div>

      {/* ADD BOOK */}
      <BookForm refresh={fetchBooks} />

      {/* BOOK LIST */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {filteredBooks.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No books found
          </p>
        )}

        {filteredBooks.map((book) => (
          <div key={book._id} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">{book.name}</h2>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="font-semibold">₹ {book.price}</p>

              <span
                className={`badge ${
                  book.available ? "badge-success" : "badge-error"
                }`}
              >
                {book.available ? "Available" : "Hidden"}
              </span>

              <div className="flex gap-2 mt-4">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setEditBook(book)}
                >
                  Edit
                </button>

                <button
                  className={`btn btn-sm ${
                    book.available ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => toggleAvailability(book._id)}
                >
                  {book.available ? "Hide" : "Show"}
                </button>

                <button
                  className="btn btn-sm btn-error"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editBook && (
        <EditBookModal
          book={editBook}
          close={() => setEditBook(null)}
          refresh={fetchBooks}
        />
      )}
    </div>
  );
}
