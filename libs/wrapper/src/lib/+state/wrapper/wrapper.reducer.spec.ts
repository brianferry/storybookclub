import { WrapperEntity } from "./wrapper.models";
import * as WrapperActions from "./wrapper.actions";
import { State, initialState, reducer } from "./wrapper.reducer";

describe("Wrapper Reducer", () => {
  const createWrapperEntity = (id: string, name = "") =>
    ({
      id,
      name: name || `name-${id}`,
    } as WrapperEntity);

  beforeEach(() => {});

  describe("valid Wrapper actions", () => {
    it("loadWrapperSuccess should return set the list of known Wrapper", () => {
      const wrapper = [
        createWrapperEntity("PRODUCT-AAA"),
        createWrapperEntity("PRODUCT-zzz"),
      ];
      const action = WrapperActions.loadWrapperSuccess({ wrapper });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe("unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
