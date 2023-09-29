import { Action, createReducer, on } from '@ngrx/store';
// import { CountActions, INCREMENT, IncrementAction } from './count.actions';
import { decrement, increment, set } from './count.actions';

const initialState = 0;
export const countReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);
// other way write reducer
// export function countReducer(
//   state = initialState,
//   action: CountActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
