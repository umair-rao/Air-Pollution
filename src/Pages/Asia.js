import React from 'react';
import { useSelector } from 'react-redux';
import DisplayAirData from '../components/DisplayAirData';
import PollutantsDetails from '../components/PollutantsDetails';

const AirData = () => {
  const sendData = useSelector((state) => state.airData);
  return (
    <div className="air-data-section">
      {sendData.airData?.list && <DisplayAirData data={sendData.airData} /> }
      {sendData.airData?.list && <PollutantsDetails detail={sendData.airData} /> }
    </div>
  );
};

export default AirData;
