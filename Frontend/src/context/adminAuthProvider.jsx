/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext();

export const useAdminAuth = () => useContext(AdminAuthContext);

export default function AdminAuthProvider({ children }) {
  const [adminUser, setAdminUser] = useState(
    JSON.parse(localStorage.getItem("Admin"))
  );

  return (
    <AdminAuthContext.Provider value={[adminUser, setAdminUser]}>
      {children}
    </AdminAuthContext.Provider>
  );
}
