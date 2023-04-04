import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchValue } from "../features/Search/searchSlice";
import styles from "./Navbar.module.css";
import SearchLogo from "../assets/Search.png";
import ProfileLogo from "../assets/Profile.png";
import BagLogo from "../assets/Bag.png";
import { selectBasketTotalPrice } from "../features/Basket/basketSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search);
  const items = useSelector((state) => state.cart.items);

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const totalPrice = selectBasketTotalPrice(items);

  console.log(typeof totalPrice);
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSide}>
        <h2 className={styles.logo}>Eteration</h2>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
          />
          <img
            className={styles.searchLogo}
            src={SearchLogo}
            alt="search bar logo"
          />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.bag}>
          <img src={BagLogo} alt="bag" />
          <p className={styles.bagCount}>
            {totalPrice.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
          </p>
        </div>
        <div className={styles.profile}>
          <img src={ProfileLogo} alt="profile" />
          <p className={styles.profileName}>Salim</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
