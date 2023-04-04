import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductList from "../components/ProductList";
import FilterAreas from "../components/FilterAreas";
import { fetchItems } from "../features/Sort/sortSlice";
import styles from "./Home.module.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search);
  const products = useSelector((state) => state.sort.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
    <div className={styles.layout}>
      <FilterAreas />
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
    </div>
  );
};

export default Home;
