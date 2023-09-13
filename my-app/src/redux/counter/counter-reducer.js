import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './counter-types';

import counterActions from './counter-actions';

// console.log(counterActions.increment.type)

// import actions from './counter-actions';

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
  [counterActions.increment]: (state, { payload }) => state + payload,
  [counterActions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(5, {
  state: (state) => state
})
// эта функция отвечает за свойство степ
// const stepReducer = (state = 5, action) => state;

// тут создали комбинацию всех свойств редюсеров
export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
