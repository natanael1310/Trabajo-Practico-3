import styles from "./Navbar.module.css";

function Navbar({ titulo, links }) {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>{titulo}</h1>
      <ul className={styles.menu}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
