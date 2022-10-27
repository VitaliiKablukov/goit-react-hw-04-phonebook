import { Fragment } from 'react';
import PropTypes from 'prop-types';
export const Filter = ({ filterInputText }) => {
  const filterText = e => {
    filterInputText(e.target.value);
  };

  return (
    <Fragment>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={filterText} />
    </Fragment>
  );
};
Filter.propTypes = {
  filterInputText: PropTypes.func.isRequired,
};
