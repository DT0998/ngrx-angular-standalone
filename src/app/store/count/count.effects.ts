import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './count.actions';
import { tap } from 'rxjs';

export class CountEffects {
  // newer version
  saveCount$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', action.value.toString());
        })
      ),
    { dispatch: false }
  );
  // older version
  // @Effect({ dispatch: false})
  //   saveCount$ = this.actions$.pipe(
  //     ofType(increment, decrement),
  //     tap((action) => {
  //       console.log(action);
  //       localStorage.setItem('count', action.value.toString());
  //     })
  //   );
  constructor(private actions$: Actions) {}
}
