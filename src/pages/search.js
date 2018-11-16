import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
const propTypes = {};

const defaultProps = {};

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Page>Search</Page>;
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
