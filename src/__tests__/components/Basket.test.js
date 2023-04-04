import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Basket from "../../components/Basket";
import { loadCartFromLocalStorage } from "../../features/Basket/basketSlice";

const mockStore = configureStore([]);

describe("Basket", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [
          {
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: 1,
          },
          {
            id: 2,
            name: "Product 2",
            price: 200,
            quantity: 2,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it("should render 'Your cart is empty.' if cart is empty", () => {
    store = mockStore({
      cart: {
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText(/Your cart is empty./i)).toBeInTheDocument();
  });

  it("should render items in cart if there are items", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();
  });

  it("should call dispatch with addItemToCart when '+' button is clicked", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    const addButton = screen.getAllByText("+")[0];
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(loadCartFromLocalStorage());
  });

  it("should call dispatch with removeItemFromCart when '-' button is clicked", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    const removeButton = screen.getAllByText("-")[0];
    fireEvent.click(removeButton);

    expect(store.dispatch).toHaveBeenCalledWith(loadCartFromLocalStorage());
  });

  it("should call dispatch with loadCartFromLocalStorage on mount", () => {
    render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(loadCartFromLocalStorage());
  });
});
