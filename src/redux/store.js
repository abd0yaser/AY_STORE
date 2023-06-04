import { configureStore } from '@reduxjs/toolkit';
import handleCart from './reducer';

const store = configureStore({
  reducer: handleCart
});

export default store;
