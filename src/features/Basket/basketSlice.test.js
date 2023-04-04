import {
  cartSlice,
  selectBasketTotalPrice,
  addItemToCart,
} from "./basketSlice";

describe("cartSlice", () => {
  const { reducer, initialState } = cartSlice;

  describe("selectBasketTotalPrice", () => {
    it("should return the total price of all items in the cart", () => {
      const state = {
        items: [
          { id: 1, name: "Product 1", price: 9.99, quantity: 2 },
          { id: 2, name: "Product 2", price: 14.99, quantity: 1 },
        ],
      };
      const totalPrice = selectBasketTotalPrice(state.items);
      expect(totalPrice).toEqual(34.97);
    });

    it("should return 0 when the cart is empty", () => {
      const state = { items: [] };
      const totalPrice = selectBasketTotalPrice(state.items);
      expect(totalPrice).toEqual(0);
    });

    it("should add a new item to the cart", () => {
      const payload = { id: 1, name: "Product 1", price: 9.99 };
      const action = addItemToCart(payload);

      const newState = reducer(initialState, action);

      expect(newState.items).toHaveLength(1);
      expect(newState.items[0]).toEqual({ ...payload, quantity: 1 });
    });

    it("should increase the quantity of an existing item in the cart", () => {
      const existingItem = {
        id: 1,
        name: "Product 1",
        price: 9.99,
        quantity: 1,
      };
      const payload = { ...existingItem, quantity: 2 };
      const state = { items: [existingItem] };
      const action = addItemToCart(payload);

      const newState = reducer(state, action);

      expect(newState.items).toHaveLength(1);
      expect(newState.items[0]).toEqual({ ...existingItem, quantity: 3 });
    });
  });
});
