import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Count] Increment',
  props<{ value: number }>()
);
export const decrement = createAction(
  '[Count] Decrement',
  props<{ value: number }>()
);

// other way write actions
// export const INCREMENT = '[Count] Increment';
// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;
//   constructor(public value: number) {}
// }
// export type CountActions = IncrementAction;
