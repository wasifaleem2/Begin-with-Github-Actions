// App.js for React Router v6
import "./App.css"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className='app'>
      <div className='app-nav'>
        <NavBar />
      </div>
      <div className='app-page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
