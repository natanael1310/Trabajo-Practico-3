import styles from "./Main.module.css";

function Main({ titulo, descripcion, items }) {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{titulo}</h2>
      <p className={styles.subtitle}>{descripcion}</p>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
