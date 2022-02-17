import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        exact
        path="/calculator"
        element={
       (
         <div className="App">
           <Calculator />
         </div>
       )
      }
      />
      <Route path="/" element={<Home />} />
      <Route path="/qoute" element={<Quote />} />
    </Routes>
  </>
);

export default App;
