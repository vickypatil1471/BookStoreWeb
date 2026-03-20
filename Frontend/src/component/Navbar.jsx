import React, { useEffect, useState } from 'react'
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/authprovider';
import { Link } from "react-router-dom";
import { useCart } from "../context/cartprovider";
import { useSearch } from '../context/searchprovider';
import { useAdminAuth } from "../context/adminAuthProvider";

function Navbar() {
  const { setSearchTerm } = useSearch();

  const { cart } = useCart();

  const [authUser]=useAuth();

  const [adminUser] = useAdminAuth();


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
  const input = document.querySelector('input[type="search"]');
  if (!input) return;

  const handler = (e) => setSearchTerm(e.target.value.toLowerCase());

  input.addEventListener("input", handler);
  return () => input.removeEventListener("input", handler);
}, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);   // DaisyUI way
    html.classList.toggle("dark", theme === "dark"); // Tailwind dark:
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
        window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const navItems=(
    <>
    <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/course'>Books</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
    </>

  );
  return (
    <>
    <div className= {` max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-base-100 ${
      sticky
      ? "sticky-navbar showdow-md bg-base-200 duration-200 transition-all ease-in-out"
      :""
    }`}
    >
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a className="b text-xl font-bold cursor-pointer">FINOLEX KNOWLEDGE HUB</a>
  </div>
  <div className="navbar-end space-x-3 ">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
      
    </ul>
  </div>
  
  <label className="input">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor "
     >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
     </g>
    </svg>
    <input type="search" className="outline-none"required placeholder="Search" />
  </label>
    <label className="swap swap-rotate">
  <input
    type="checkbox"
    checked={theme === "dark"}
    onChange={() =>
      setTheme(theme === "light" ? "dark" : "light")
    }
  />

  {/* Sun */}
  <svg className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 5a1 1 0 0 1 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 1 1 1zm0 14a1 1 0 0 1 1 1v1a1 1 0 0 0-2 0v-1a1 1 0 0 1 1-1zm7-7a1 1 0 0 1 1-1h1a1 1 0 0 0 0-2h-1a1 1 0 0 1-1 1zm-14 0a1 1 0 0 1-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1-1zm7-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
  </svg>

  {/* Moon */}
  <svg className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.64 13a9 9 0 1 1-10.6-10.6 7 7 0 1 0 10.6 10.6z"/>
  </svg>
</label>
<Link
  to="/cart"
  className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-base-200 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9"
    />
  </svg>

  {cart.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow">
      {cart.length}
    </span>
  )}
</Link>



{
  authUser?<Logout/>:
  <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
    onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div>
}
{/* 🔐 ADMIN SIGN IN BUTTON */}
{!adminUser && (
  <Link to="/admin/login">
    <button className="btn btn-outline bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition ml-2">
      Admin 
    </button>
  </Link>
)}
{adminUser && (
  <Link to="/admin">
    <button className="btn btn-error ml-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition">
      Admin
    </button>
  </Link>
)}    
</div>
</div>
    </div>
    </>
  )
}

export default Navbar
