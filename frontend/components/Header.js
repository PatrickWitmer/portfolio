import Link from 'next/link';
import Nav from './Nav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <h1 className={styles.logo}>
          <Link href="/">Hexcraft</Link>
        </h1>
      </div>
      <div className={styles.subBar}>
        <p className={styles.search}>Search</p>
      </div>
      <Nav />
    </header>
  );
}
