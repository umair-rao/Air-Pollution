import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Asia from './Pages/Asia';
import { fetchAirData } from './Redux/AirData';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchAirData()).unwrap();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Asia />} />
      </Routes>
    </div>
  );
}

export default App;
