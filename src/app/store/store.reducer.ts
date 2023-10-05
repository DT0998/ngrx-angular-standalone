import * as fromCount from './count/count.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const appReducer: ActionReducerMap<any> = {
  count: fromCount.countReducer,
};
