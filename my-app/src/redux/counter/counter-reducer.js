import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionTypes from './counter-types';

// тут редюсер отвечает только за свойтсво велью
// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//       case actionTypes.INCREMENT:
//       return state + payload;

//       case actionTypes.DECREMENT:
//           return state - payload;

//     default:
//       return state;
//   }
// };

const valueReducer = createReducer(10, {
  [actionTypes.INCREMENT]: (state, { payload }) => state + payload,
  [actionTypes.DECREMENT]: (state, {payload}) => state - payload,
});

// эта функция отвечает за свойство степ
const stepReducer = (state = 5, action) => state;

// тут создали комбинацию всех свойств
export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
