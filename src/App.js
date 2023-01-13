import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesDetailsPage from './Pages/CountriesDetailsPage';
import Details from './Pages/Details';
import { fetchCountriesData } from './Redux/ShowCountires';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCountriesData()).unwrap();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesDetailsPage />} />
        <Route path="/details/:countryName" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
