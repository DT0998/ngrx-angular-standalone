import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './count.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './count.selector';

@Injectable()
export class CountEffects {
  // newer version
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCount = localStorage.getItem('count');
        if (storedCount) {
          return of(set({ value: +storedCount }));
        }
        return of(set({ value: 0 }));
      })
    )
  );

  saveCount$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, count]) => {
          console.log(action);
          localStorage.setItem('count', count.toString());
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
  constructor(
    private actions$: Actions,
    private store: Store<{ count: number }>
  ) {}
}
