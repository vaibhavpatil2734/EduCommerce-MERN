import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Service from './pages/Service';
import Courses from './pages/courses/Courses'
import Navbar from './components/navbar/Navbar';
import Error from './pages/error';
import React, { useState } from 'react';



export default function App() {

  const [coursenum, setcoursenum] = useState(0)
  const [username, setusername] = useState("")
  const getusername=(a)=>{
    setusername(a)
  }
  const getcoursenum=(b)=>{
    setcoursenum(b)
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar username={username}/>
        <Routes>
        <Route Route path="/" element={<Home getcoursenum={getcoursenum}/>} />
        <Route Route path='/about' element={<About/>}/>
        <Route Route path='/contact' element={<Contact/>}/>
        <Route Route path='/register' element={<Register/>}/>
        <Route Route path='/login' element={<Login getusername ={getusername}/>}/>
        <Route Route path='/service' element={<Service/>}/>
        <Route Route path='/courses' element={<Courses coursenum={coursenum}/>}/>
        <Route Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
