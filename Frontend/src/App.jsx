import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './component/Signup';
import About from './component/About';
import Contact from './component/Contact';
import Jobs from './component/Jobs';
import Press from './component/Press';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authprovider';
import Cart from './pages/Cart';

import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/AdminLayout";
import Users from "./admin/Users";
import Books from "./admin/Books";
import Contacts from "./admin/Contacts";

import AdminSignup from "./admin/AdminSignup";
import AdminLogin from "./admin/AdminLogin";
import Orders from './admin/Orders';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser, setAuthUser);

  return (
    <>
      <Routes>

        {/* NORMAL ROUTES */}
        <Route path='/' element={<Home />} />
        <Route
          path='/course'
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/press" element={<Press />} />
        <Route path="/cart" element={<Cart />} />

        {/* 🔐 ADMIN AUTH ROUTES  */}
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="books" element={<Books />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>

      <Toaster />
    </>
  );
}

export default App;
