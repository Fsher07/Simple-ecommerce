import React, { useState, useEffect } from "react";

import styles from "./FilterArea.module.css";
import {
  sortItems,
  filterBrand,
  filterModel,
} from "../features/Sort/sortSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterAreas = () => {
  const [selectedOption, setSelectedOption] = useState("old");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const dispatch = useDispatch();
  const initialProducts = useSelector((state) => state.sort.initialItems);

  const handleOptionChange = (event) => {
    const currentOption = event.target.value;
    setSelectedOption(currentOption);
    dispatch(sortItems(currentOption));
  };
  const brands = new Set(initialProducts.map((product) => product.brand));
  const models = new Set(initialProducts.map((product) => product.model));

  const handleBrandChange = (event) => {
    const currentBrand = event.target.value;

    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(currentBrand)) {
        return prevSelectedBrands.filter((brand) => brand !== currentBrand);
      } else {
        return [...prevSelectedBrands, currentBrand];
      }
    });
  };

  const handleModelChange = (event) => {
    const currentModel = event.target.value;

    setSelectedModels((prevSelectedModels) => {
      if (prevSelectedModels.includes(currentModel)) {
        return prevSelectedModels.filter((model) => model !== currentModel);
      } else {
        return [...prevSelectedModels, currentModel];
      }
    });
  };

  useEffect(() => {
    dispatch(filterBrand(selectedBrands));
  }, [selectedBrands, dispatch]);

  useEffect(() => {
    dispatch(filterModel(selectedModels));
  }, [selectedModels, dispatch]);

  return (
    <div className={styles.areas}>
      <div>
        <p className={styles.headerSort}>Sort By</p>
        <div className={styles.container}>
          <label className={styles.radio}>
            <input
              type="radio"
              value="old"
              checked={selectedOption === "old"}
              onChange={handleOptionChange}
            />
            Old to New
          </label>

          <label className="radio">
            <input
              type="radio"
              value="new"
              checked={selectedOption === "new"}
              onChange={handleOptionChange}
            />
            New to Old
          </label>

          <label className="radio">
            <input
              type="radio"
              value="high"
              checked={selectedOption === "high"}
              onChange={handleOptionChange}
            />
            High to Low Price
          </label>

          <label className="radio">
            <input
              type="radio"
              value="low"
              checked={selectedOption === "low"}
              onChange={handleOptionChange}
            />
            Low to High Price
          </label>
        </div>
      </div>
      <div>
        <p className={styles.header}>Brands</p>
        <div className={styles.container}>
          {Array.from(brands).map((brand) => (
            <label className={styles.checkbox}>
              <input
                className={styles.brandBox}
                type="checkbox"
                value={brand}
                onChange={handleBrandChange}
              />
              <span className={styles.checkmark}></span>
              {brand}
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.header}>Model</p>
        <div className={styles.container}>
          {Array.from(models).map((model) => (
            <label className={styles.checkbox}>
              <input
                onChange={handleModelChange}
                type="checkbox"
                value={model}
              />
              {model}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterAreas;
