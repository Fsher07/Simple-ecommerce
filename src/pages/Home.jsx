import React, { useEffect, useState } from "react";

import ProductList from "../components/ProductList";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);

  /*create pagination with 12 element per page */
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const searchValue = useSelector((state) => state.search);

  useEffect(() => {
    fetch("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      searchValue === "" ||
      product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <ProductList products={currentProducts} />
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={[
              styles.button,
              currentPage === number ? styles.activeButton : "",
            ].join(" ")}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
