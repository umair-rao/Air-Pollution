import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PollutantsDetails.css';

const PollutantsDetails = ({ detail }) => (
  <>
    <div className="details-container">
      <div className="item">
        <div className="title">
          <p>Carbon monoxide (CO)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.co}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Nitrogen monoxide (NO)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.no}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Nitrogen monoxide (NO2)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.no2}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Sulphur dioxide (SO2)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.so2}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Ozone (O3)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.o3}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Ammonia (NH3)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.nh3}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Particulates (PM2.5)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.pm2_5}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Particulates (PM10)</p>
        </div>
        <div className="value">
          <p>{detail.list[0].components.pm10}</p>
        </div>
      </div>
    </div>
  </>
);

PollutantsDetails.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PollutantsDetails;
