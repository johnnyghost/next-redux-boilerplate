import React from 'react';
import { List } from 'modules/list';
import AuthenticatedLayout from 'layouts/Authenticated';

class Search extends React.Component {
  render() {
    return (
      <AuthenticatedLayout>
        <List />
      </AuthenticatedLayout>
    );
  }
}

export default Search;
