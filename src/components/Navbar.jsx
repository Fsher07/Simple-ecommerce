import React from "react";

import styles from "./Navbar.module.css";
import SearchLogo from "../assets/Search.png";
import ProfileLogo from "../assets/Profile.png";
import BagLogo from "../assets/Bag.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSide}>
        <h2 className={styles.logo}>Eteration</h2>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
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
          <p className={styles.profileName}>John Doe</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
