import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const DisplayAirData = ({ data }) => (
  <div>
    <div className="container">
      <div className="next-icon">
        <FaArrowRight />
      </div>
      <div className="card-title">
        <h2>Lahore</h2>
      </div>
      <div className="aqi-container">
        <p>
          Air Quality Index:
          {data.list[0].main.aqi}
        </p>
      </div>
    </div>
  </div>
);

DisplayAirData.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DisplayAirData;
