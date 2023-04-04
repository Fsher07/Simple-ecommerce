import { searchSlice, setSearchValue } from "./searchSlice";

describe("searchSlice", () => {
  const { reducer, initialState } = searchSlice;
  describe("setSearchValue", () => {
    it("should set the search value", () => {
      const action = setSearchValue("test");
      const newState = reducer(initialState, action);
      expect(newState).toEqual("test");
    });
  });
});
