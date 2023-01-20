import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Interacto! Coming soon.</h1>
        <h2>We are building a platform.</h2>
        <div className={styles.loading}><div></div><div></div><div></div></div>
      </div>
      </header>
    </div>
  );
}

export default App;
