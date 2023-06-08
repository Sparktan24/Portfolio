import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../redux/coins/coinsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;