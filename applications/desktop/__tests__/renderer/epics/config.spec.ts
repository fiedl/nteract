

import { of } from "rxjs";
import { saveConfigOnChangeEpic } from "../../../src/notebook/epics/config";

describe("saveConfigOnChangeEpic", () => {
  test("invokes a SAVE_CONFIG when the SET_CONFIG action happens", done => {
    const action$ = of({ type: "SET_CONFIG" });
    const responseActions = saveConfigOnChangeEpic(action$);
    responseActions.subscribe(
      x => {
        expect(x).toEqual({ type: "SAVE_CONFIG" });
        done();
      },
      err => done.fail(err)
    );
  });
});
