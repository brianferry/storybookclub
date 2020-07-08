import { WrapperEntity } from "./wrapper.models";
import { State, wrapperAdapter, initialState } from "./wrapper.reducer";
import * as WrapperSelectors from "./wrapper.selectors";

describe("Wrapper Selectors", () => {
  const ERROR_MSG = "No Error Available";
  const getWrapperId = (it) => it["id"];
  const createWrapperEntity = (id: string, name = "") =>
    ({
      id,
      name: name || `name-${id}`,
    } as WrapperEntity);

  let state;

  beforeEach(() => {
    state = {
      wrapper: wrapperAdapter.addAll(
        [
          createWrapperEntity("PRODUCT-AAA"),
          createWrapperEntity("PRODUCT-BBB"),
          createWrapperEntity("PRODUCT-CCC"),
        ],
        {
          ...initialState,
          selectedId: "PRODUCT-BBB",
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe("Wrapper Selectors", () => {
    it("getAllWrapper() should return the list of Wrapper", () => {
      const results = WrapperSelectors.getAllWrapper(state);
      const selId = getWrapperId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe("PRODUCT-BBB");
    });

    it("getSelected() should return the selected Entity", () => {
      const result = WrapperSelectors.getSelected(state);
      const selId = getWrapperId(result);

      expect(selId).toBe("PRODUCT-BBB");
    });

    it("getWrapperLoaded() should return the current 'loaded' status", () => {
      const result = WrapperSelectors.getWrapperLoaded(state);

      expect(result).toBe(true);
    });

    it("getWrapperError() should return the current 'error' state", () => {
      const result = WrapperSelectors.getWrapperError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
