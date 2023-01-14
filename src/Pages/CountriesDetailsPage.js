import React from 'react';
import { useSelector } from 'react-redux';
import CountryTitle from '../components/CountryTitle';
import '../styles/CountriesDetailsPage.css';

const CountriesDetailsPage = () => {
  const sendData = useSelector((state) => state.countriesData);
  return (
    <div className="country-data-section">
      <div className="country-container">
        {sendData.countriesData?.map((item) => (
          <CountryTitle
            key={item.country}
            data={item}
          />
        )) }
      </div>
    </div>
  );
};

export default CountriesDetailsPage;
