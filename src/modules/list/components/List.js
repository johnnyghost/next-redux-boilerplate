import React from 'react';
import PropTypes from 'prop-types';
import withObservableStream from 'core/hoc/withObservableStream';
import { list$, addItem, updateInput } from '../store/list';

const propTypes = { items: PropTypes.array.isRequired };
const defaultProps = { items: [], input: '' };

const List = props => {
  /**
   *
   * @param {*} event
   */
  const onChangeInput = event => props.onUpdateInput(event.target.value);

  /**
   *
   */
  const renderList = () =>
    props.items.map((item, index) => <div key={index}>{item.name}</div>);

  /**
   *
   */
  const renderInput = () => (
    <input value={props.input} onChange={onChangeInput} />
  );

  /**
   *
   */
  const onAddItemClick = () => props.onAddContact(props.input);

  return (
    <React.Fragment>
      {renderList()}
      {renderInput()}
      <button onClick={onAddItemClick}>add item</button>
    </React.Fragment>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default withObservableStream(list$, {
  onUpdateInput: value => updateInput(value),
  onAddContact: value => addItem(value)
})(List);
