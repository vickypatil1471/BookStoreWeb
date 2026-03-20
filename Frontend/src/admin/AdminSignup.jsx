import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/admin/signup", form);

      toast.success("Admin account created successfully ✅");

      setTimeout(() => {
        navigate("/admin/login");
      }, 800);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Admin signup failed ❌"
      );
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
          Admin Signup
        </h2>

        <input
          className="input input-bordered w-full mb-3"
          placeholder="Admin Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          className="input input-bordered w-full mb-3"
          placeholder="Admin Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          className="input input-bordered w-full mb-4"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Signup
        </button>
      </form>
    </div>
  );
}
