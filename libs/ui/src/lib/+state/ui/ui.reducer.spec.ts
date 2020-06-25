import { UiEntity } from './ui.models';
import * as UiActions from './ui.actions';
import { State, initialState, reducer } from './ui.reducer';

describe('Ui Reducer', () => {
  const createUiEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UiEntity);

  beforeEach(() => {});

  describe('valid Ui actions', () => {
    it('loadUiSuccess should return set the list of known Ui', () => {
      const ui = [createUiEntity('PRODUCT-AAA'), createUiEntity('PRODUCT-zzz')];
      const action = UiActions.loadUiSuccess({ ui });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
