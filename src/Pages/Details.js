import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailFeed from '../components/DetailFeed';
import { fetchCovidDetail } from '../Redux/CovidDetail';

const Details = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covidDetail);
  useEffect(() => {
    if (countryName) {
      dispatch(fetchCovidDetail(countryName)).unwrap();
    }
  }, [countryName, dispatch]);
  return (
    <div className="covid-data-section">
      {covidData?.covidDetail.updated
        ? <DetailFeed detail={covidData.covidDetail} />
        : <h1 className="items-center loading">Loading data.Please wait</h1>}
    </div>
  );
};

export default Details;
