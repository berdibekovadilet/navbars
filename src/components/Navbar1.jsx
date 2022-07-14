import styles from "../styles/navbar1.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const showNavbar = () => {
    isOpen && setIsOpen(false);
    !isOpen && setIsOpen(true);
  };
  return (
    <header className={styles.container}>
      <h3 className={styles.logo}>Logo.</h3>
      <nav
        className={`${
          isOpen ? styles.menuList : `${styles.menuList} ${styles.menuListOpen}`
        } `}
      >
        <a className={styles.listItem} href="#/">
          item 1
        </a>
        <a className={styles.listItem} href="#/">
          item 2
        </a>
        <a className={styles.listItem} href="#/">
          item 3
        </a>
        <a className={styles.listItem} href="#/">
          item 4
        </a>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>

      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar1;
