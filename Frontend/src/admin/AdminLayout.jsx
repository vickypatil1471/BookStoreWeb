import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/adminAuthProvider";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [, setAdminUser] = useAdminAuth();

  const handleLogout = () => {
    localStorage.removeItem("Admin");
    setAdminUser(null);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* SIDEBAR */}
      <aside className="w-64 bg-base-100 p-4 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

          <ul className="menu space-y-2">
            <li><Link to="users">Users</Link></li>
            <li><Link to="books">Books</Link></li>
            <li><Link to="contacts">Messages</Link></li>
            <li><Link to="orders">Orders</Link></li>

          </ul>
        </div>

        {/* BUTTONS */}
        <div className="space-y-2">
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline w-full"
          >
            ← Back to Website
          </button>

          <button
            onClick={handleLogout}
            className="btn btn-error w-full"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
