/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const AdminSearchContext = createContext();

export const AdminSearchProvider = ({ children }) => {
  const [adminSearchTerm, setAdminSearchTerm] = useState("");

  return (
    <AdminSearchContext.Provider
      value={{ adminSearchTerm, setAdminSearchTerm }}
    >
      {children}
    </AdminSearchContext.Provider>
  );
};

export const useAdminSearch = () => useContext(AdminSearchContext);


