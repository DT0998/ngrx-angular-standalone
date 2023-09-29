import { createSelector } from '@ngrx/store';

export const selectCount = (state: { count: number }) => state.count;
export const selectDoubleCount = createSelector(
  selectCount,
  (count: number) => count * 2
);
