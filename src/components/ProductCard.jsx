import React from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../features/Basket/basketSlice";
import styles from "./ProductCard.module.css";

const ProductCard = ({ img, price, name, brand, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt={name} />
      <p className={styles.price}>
        {price} <span>₺</span>
      </p>
      <p>{name}</p>
      <p>{brand}</p>
      <button className={styles.button} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
