import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './component/Signup'
import About from './component/About'
import Contact from './component/Contact'
import Jobs from './component/Jobs'
import Press from './component/Press'

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </>
  )
}

export default App