import React from 'react';
import styles from './styles.css';

const propTypes = {};
const defaultProps = {};

const Page = ({ children }) => (
  <React.Fragment>
    <header className={styles.header}>the header</header>
    {children}
    <footer className={styles.footer}>the footer</footer>
  </React.Fragment>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
