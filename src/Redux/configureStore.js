import { configureStore } from '@reduxjs/toolkit';
import airReducer from './AirData';

const store = configureStore({
  reducer: {
    airData: airReducer,
  },
});

export default store;
