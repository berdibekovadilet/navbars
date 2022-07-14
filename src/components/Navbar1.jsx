import styles from "../styles/navbar1.module.css";

const Navbar1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo.</div>
      <ul className={styles.menuList}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
};

export default Navbar1;
