import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// // API
// const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=161f89e40dd14251b2b0113771b4704a';

// // Action-Types
// const AIR_POLLUTION_DATA = 'AirData/AirData/AIR_POLLUTION_DATA';

// // Reducers
// const initialState = [];

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case AIR_POLLUTION_DATA:
//       return [...action.payload];
//     default:
//       return state;
//   }
// }

// // Action-Creators
// export const fetchAirData = createAsyncThunk(AIR_POLLUTION_DATA, async () => {
//   const res = await axios.get(baseURL);
//   const { data } = res;
//   const airData = [];

//   data.forEach((object) => {
//     airData.push(object);
//   });
//   return airData;
// });

const AIR_POLLUTION_DATA = 'AirData/AirData/AIR_POLLUTION_DATA';
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=161f89e40dd14251b2b0113771b4704a';

export const fetchAirData = createAsyncThunk(
  AIR_POLLUTION_DATA,
  async (args, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: AIR_POLLUTION_DATA, payload: response.data });
  },
);

const initialState = { airData: [] };
const fetchAirDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AIR_POLLUTION_DATA:
      return {
        ...state,
        airData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchAirDataReducer;
