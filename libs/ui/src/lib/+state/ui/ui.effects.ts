import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromUi from './ui.reducer';
import * as UiActions from './ui.actions';

@Injectable()
export class UiEffects {
  loadUi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.loadUi),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UiActions.loadUiSuccess({ ui: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UiActions.loadUiFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
