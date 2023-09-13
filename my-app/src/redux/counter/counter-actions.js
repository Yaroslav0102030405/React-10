import actionTypes from "./counter-types";
import { createAction } from '@reduxjs/toolkit';

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });



export const increment = createAction(actionTypes.INCREMENT);
export const decrement = createAction(actionTypes.DECREMENT);
 
