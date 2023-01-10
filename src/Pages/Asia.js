import React from 'react';
import { useSelector } from 'react-redux';
import DisplayAirData from '../components/DisplayAirData';

const AirData = () => {
  const data = useSelector((state) => state.AirData);

  return (
    <div className="air-data-section">
      {data.map((item) => <DisplayAirData key={Math.random()} item={item} />)}
    </div>
  );
};

export default AirData;
