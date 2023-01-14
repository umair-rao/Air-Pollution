import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COUNTRIES_DATA = 'CovidData/CovidData/COUNTRIES_DATA';
const baseURL = 'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1';

export const fetchCountriesData = createAsyncThunk(
  COUNTRIES_DATA,
  async (args, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: COUNTRIES_DATA, payload: response.data });
  },
);

const initialState = { countriesData: [] };
const fetchCountriesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_DATA:
      return {
        ...state,
        countriesData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCountriesDataReducer;
