import styles from "./Error.module.scss";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorCode}>404</h2>
      <h3 className={styles.errorTitle}>Страница не найдена.</h3>
      <p className={styles.errorDescription}>
        Похоже, такой страницы не существует.
      </p>
      <div className={styles.errorButtonContainer}>
        <Link href={"/"}>На главную</Link>
      </div>
    </div>
  );
}
