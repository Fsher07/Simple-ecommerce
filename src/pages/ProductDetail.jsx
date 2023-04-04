import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { addItemToCart } from "../features/Basket/basketSlice";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();
  const product = location.state;

  const handleGoBack = () => {
    navigation(-1);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} />
      <div className={styles.intro}>
        <h3>{product.name}</h3>
        <p className={styles.price}>
          {Number(product.price).toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </p>
        <button className={styles.button} onClick={handleAddToCart}>
          Add To Cart
        </button>
        <p>{product.description}</p>
        <button className={styles.buttonGoBack} onClick={handleGoBack}>
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
