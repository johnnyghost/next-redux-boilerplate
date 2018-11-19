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
    <div className={styles.content}>{children}</div>
  </div>
);

Page.propTypes = propTypes;

export default Page;
