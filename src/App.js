import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <>
       <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;