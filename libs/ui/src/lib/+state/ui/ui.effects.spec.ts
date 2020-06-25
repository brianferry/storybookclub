import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UiEffects } from './ui.effects';
import * as UiActions from './ui.actions';

describe('UiEffects', () => {
  let actions: Observable<any>;
  let effects: UiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UiEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UiEffects);
  });

  describe('loadUi$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UiActions.loadUi() });

      const expected = hot('-a-|', { a: UiActions.loadUiSuccess({ ui: [] }) });

      expect(effects.loadUi$).toBeObservable(expected);
    });
  });
});
