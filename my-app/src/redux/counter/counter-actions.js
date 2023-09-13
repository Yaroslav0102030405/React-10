// import actionTypes from "./counter-types";
import { createAction } from '@reduxjs/toolkit';

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
// const INCREMENT = 'counter/Increment';
// const DECREMENT = 'counter/Decrement';

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Decrement');

export default { increment, decrement };
