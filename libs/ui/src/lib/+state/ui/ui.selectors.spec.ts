import { UiEntity } from './ui.models';
import { State, uiAdapter, initialState } from './ui.reducer';
import * as UiSelectors from './ui.selectors';

describe('Ui Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUiId = (it) => it['id'];
  const createUiEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UiEntity);

  let state;

  beforeEach(() => {
    state = {
      ui: uiAdapter.addAll(
        [
          createUiEntity('PRODUCT-AAA'),
          createUiEntity('PRODUCT-BBB'),
          createUiEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Ui Selectors', () => {
    it('getAllUi() should return the list of Ui', () => {
      const results = UiSelectors.getAllUi(state);
      const selId = getUiId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UiSelectors.getSelected(state);
      const selId = getUiId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUiLoaded() should return the current 'loaded' status", () => {
      const result = UiSelectors.getUiLoaded(state);

      expect(result).toBe(true);
    });

    it("getUiError() should return the current 'error' state", () => {
      const result = UiSelectors.getUiError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
