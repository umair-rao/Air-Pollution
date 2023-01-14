import { FaArrowLeft } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="nav-container">
      <a href="/" className="items-center">
        <div className="back-icon">
          <FaArrowLeft />
        </div>
        <div className="nav-heading">
          <h1 className="nav-title">Worldwide COVID-19 Live Data Analysis</h1>
        </div>
      </a>
      <div className="time-date">
        <div className="time">
          <p>
            Time:
            {' '}
            {time.toLocaleTimeString()}
          </p>
        </div>
        <div className="date">
          <p>
            Date:
            {' '}
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
