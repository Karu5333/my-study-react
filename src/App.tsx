import React from 'react';
import './App.css';
import TitleBar from './components/TitleBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Products from './components/Products';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <TitleBar/>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products/>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
