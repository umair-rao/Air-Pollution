import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/CountryTitle.css';

const CountryTitle = ({ data }) => (
  <div className="airData">
    <div className="container">
      <a href={`/details/${data?.country}`} className="next-icon">
        <FaArrowRight />
      </a>
      <div className="details">
        <div className="card-title">
          <h2>{data?.country}</h2>
        </div>
        {
          data?.timeline && (
          <div className="vaccine">
            <p>{data.timeline[Object.keys(data.timeline)[0]]}</p>
          </div>
          )
        }
      </div>
    </div>
  </div>
);

CountryTitle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // timeline: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CountryTitle;
