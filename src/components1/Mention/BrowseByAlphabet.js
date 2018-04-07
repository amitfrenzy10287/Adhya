import React from 'react';
import {PropTypes} from 'prop-types';

const BrowseByAlphabet = ({data, handleClick}) => {
  return (
    <div className="row form-group">
      <label><strong>Browse by publication name</strong></label>
      {data && data.map((i, key) => (<span className="ml-2"><a href="#" key={key} onClick={handleClick} id={i}>{i}</a></span>)) }
    </div>
  );
}

BrowseByAlphabet.propTypes = {
  data: PropTypes.array,
  handleClick: PropTypes.func
};

export default BrowseByAlphabet;
