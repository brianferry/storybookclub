import { TestBed, async } from "@angular/core/testing";

import { Observable } from "rxjs";

import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { NxModule, DataPersistence } from "@nrwl/angular";
import { hot } from "@nrwl/angular/testing";

import { WrapperEffects } from "./wrapper.effects";
import * as WrapperActions from "./wrapper.actions";

describe("WrapperEffects", () => {
  let actions: Observable<any>;
  let effects: WrapperEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        WrapperEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(WrapperEffects);
  });

  describe("loadWrapper$", () => {
    it("should work", () => {
      actions = hot("-a-|", { a: WrapperActions.loadWrapper() });

      const expected = hot("-a-|", {
        a: WrapperActions.loadWrapperSuccess({ wrapper: [] }),
      });

      expect(effects.loadWrapper$).toBeObservable(expected);
    });
  });
});
