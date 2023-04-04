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
    <div className={styles.layout}>
      <div className={styles.container}>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={styles.basketList}>
            {items.map((item) => (
              <li className={styles.row} key={item.id}>
                <div>
                  <p>{item.name}</p>
                  <p className={styles.price}>
                    {Number(item.price).toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    })}
                  </p>
                </div>
                <div className={styles.quantityRow}>
                  <button
                    className={styles.button}
                    onClick={() => handleAddItem(item.id)}
                  >
                    +
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    className={styles.button}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.containerCheckOut}>
        <p>
          Total Price:{" "}
          <span className={styles.price}>
            {totalPrice.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
          </span>
        </p>
        <button className={styles.buttonCheckOut}>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
