import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchValue } from "../features/Search/searchSlice";
import styles from "./Navbar.module.css";
import SearchLogo from "../assets/Search.png";
import ProfileLogo from "../assets/Profile.png";
import BagLogo from "../assets/Bag.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search);

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
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
          <p className={styles.bagCount}>0</p>
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
