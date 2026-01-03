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

function App() {

    const [authUser,setAuthUser]= useAuth();
    console.log(authUser,setAuthUser);
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/press" element={<Press />} />
      </Routes>
       <Toaster />
    </>
  )
}

export default App