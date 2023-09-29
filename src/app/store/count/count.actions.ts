import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Count] Increment',
  props<{ value: number }>()
);
