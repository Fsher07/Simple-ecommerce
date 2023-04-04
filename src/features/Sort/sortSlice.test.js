import { configureStore } from "@reduxjs/toolkit";
import sortReducer, {
  fetchItems,
  filterBrand,
  filterModel,
  sortItems,
} from "./sortSlice";

describe("sortSlice", () => {
  describe("sortItems reducer", () => {
    it("should sort items by price in descending order", () => {
      const initialState = {
        items: [
          { id: 1, name: "Item A", price: 10 },
          { id: 2, name: "Item B", price: 5 },
          { id: 3, name: "Item C", price: 15 },
        ],
      };

      const expectedState = {
        items: [
          { id: 3, name: "Item C", price: 15 },
          { id: 1, name: "Item A", price: 10 },
          { id: 2, name: "Item B", price: 5 },
        ],
      };

      const action = sortItems("high");
      const state = sortReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
