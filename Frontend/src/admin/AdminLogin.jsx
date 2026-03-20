import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAdminAuth } from "../context/adminAuthProvider";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [, setAdminUser] = useAdminAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/admin/login",
        form
      );

      localStorage.setItem("Admin", JSON.stringify(res.data));
      setAdminUser(res.data);

      toast.success("Admin login successful 🎉");

      setTimeout(() => {
        navigate("/admin");
      }, 800);
    } catch {
      toast.error("Invalid admin credentials ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <form
        onSubmit={submit}
        className="card p-6 bg-base-100 shadow w-96 relative"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h2>

        <input
          className="input input-bordered w-full mb-3"
          placeholder="Admin Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          className="input input-bordered w-full mb-3"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          New Admin?{" "}
          <Link
            to="/admin/signup"
            className="text-primary font-semibold"
          >
            Create Admin Account
          </Link>
        </p>
      </form>
    </div>
  );
}
