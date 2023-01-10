/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const DisplayAirData = ({ data }) => {
  const {
    aqi, co,
  } = data;

  return (
    <div>
      <div className="container">
        <div className="aqi-container">
          <h2>{aqi}</h2>
        </div>
        <div className="co-data">
          <h2>{co}</h2>
        </div>
      </div>
    </div>
  );
};

DisplayAirData.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DisplayAirData;
