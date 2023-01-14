import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './ShowCountires';
import covidDetailReducer from './CovidDetail';

const store = configureStore({
  reducer: {
    countriesData: countriesReducer,
    covidDetail: covidDetailReducer,
  },
});

export default store;
