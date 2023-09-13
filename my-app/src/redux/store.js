
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';

const middleware = [...getDefaultMiddleware(), logger]


// проверить какой сечас режим - продакшин или разработка  
// console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    middleware,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
