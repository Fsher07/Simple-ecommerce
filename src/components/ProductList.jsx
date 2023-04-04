import React from "react";

import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.gridContainer}>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.image}
            price={product.price}
            name={product.name}
            brand={product.brand}
            product={product}
          />
        ))}
    </div>
  );
};

export default ProductList;
