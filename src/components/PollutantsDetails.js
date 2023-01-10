import React from 'react';
import PropTypes from 'prop-types';

const PollutantsDetails = ({ detail }) => (
  <>
    <div className="details-container">
      <div className="CO">
        <p>Carbon monoxide (CO)</p>
        <p>{detail.list[0].components.co}</p>
      </div>
      <div className="NO">
        <p>Nitrogen monoxide (NO)</p>
      </div>
      <div className="NO2">
        <p>Nitrogen dioxide (NO2)</p>
      </div>
      <div className="O3">
        <p>Ozone (O3)</p>
      </div>
      <div className="SO2">
        <p>Sulphur dioxide (SO2)</p>
      </div>
      <div className="NH3">
        <p>Ammonia (NH3)</p>
      </div>
      <div className="PM2">
        <p>Particulates (PM2.5)</p>
      </div>
      <div className="PM10">
        <p>Particulates (PM10)</p>
      </div>
    </div>
  </>
);

PollutantsDetails.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PollutantsDetails;
