import styles from './notFound.module.css'

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.notFound}>
        <h1 >404 - Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
      </div>
    </main>
  );
};
