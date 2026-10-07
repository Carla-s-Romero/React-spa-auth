import { Link } from "../../components/Link";
import Typography from "../../components/Typography";
import styles from "./notFound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.notFound}>
        <h1>Acho que nos perdemos</h1>
        <p>Não conseguimos encontrar a página que você está procurando.</p>
        <p>Que tal explorar nosso site?</p>
        <Link href="/">
          <Typography variant="body" color="--highlight-green">
            Voltar ao início
          </Typography>
        </Link>
      </div>
    </main>
  );
};
