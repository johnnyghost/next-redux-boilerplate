import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const propTypes = {
  children: PropTypes.node
};

/**
 * <Page />
 *
 */
const Page = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>the header</header>
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>the footer</footer>
  </div>
);

Page.propTypes = propTypes;

export default Page;
