import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  loadCartFromLocalStorage,
  selectBasketTotalPrice,
} from "../features/Basket/basketSlice";
import styles from "./Basket.module.css";

const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleAddItem = (id) => {
    dispatch(addItemToCart({ id }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  const totalPrice = selectBasketTotalPrice(items);
  return (
    <div>
      <p>Cart</p>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li className={styles.row} key={item.id}>
              <button
                className={styles.button}
                onClick={() => handleAddItem(item.id)}
              >
                +
              </button>
              {item.name} - {item.quantity}{" "}
              <button
                className={styles.button}
                onClick={() => handleRemoveItem(item.id)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Checkout</p>
      <p>{totalPrice}</p>
    </div>
  );
};

export default Basket;
