import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DetailFeed.css';

const DetailFeed = ({ detail }) => (
  <>
    <div className="details-container">
      <div className="item">
        <div className="title">
          <p>Country</p>
        </div>
        <div className="value">
          <p>{detail.country}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Population</p>
        </div>
        <div className="value">
          <p>{detail.population}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Total Number of Cases</p>
        </div>
        <div className="value">
          <p>{detail.cases}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Total Number Deaths</p>
        </div>
        <div className="value">
          <p>{detail.deaths}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Total Recovered</p>
        </div>
        <div className="value">
          <p>{detail.recovered}</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <p>Number of Tests Conducted</p>
        </div>
        <div className="value">
          <p>{detail.tests}</p>
        </div>
      </div>
    </div>
  </>
);

DetailFeed.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DetailFeed;
