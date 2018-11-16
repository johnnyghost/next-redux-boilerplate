import React from 'react';
import styles from './styles.css';

const Page = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>the header</header>
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>the footer</footer>
  </div>
);

export default Page;
