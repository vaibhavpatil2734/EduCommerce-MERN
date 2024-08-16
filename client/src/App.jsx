import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Service from './pages/Service';
import Navbar from './components/navbar/Navbar';
import Error from './pages/error';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route Route path="/" element={<Home />} />
        <Route Route path='/about' element={<About/>}/>
        <Route Route path='/contact' element={<Contact/>}/>
        <Route Route path='/register' element={<Register/>}/>
        <Route Route path='/login' element={<Login/>}/>
        <Route Route path='/service' element={<Service/>}/>
        <Route Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
