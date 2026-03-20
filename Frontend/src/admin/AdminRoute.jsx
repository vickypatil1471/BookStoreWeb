import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../context/adminAuthProvider";

export default function AdminRoute({ children }) {
  const [adminUser] = useAdminAuth();

  if (!adminUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
