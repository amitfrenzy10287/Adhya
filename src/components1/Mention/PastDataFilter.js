import React from 'react';
import {PropTypes} from 'prop-types';
import { DropDown } from '../FormInput';

const PastDataFilter = () => {
 return(
   <div>
    <span>1 Day</span> | <span>7 Days</span> | <span>30 Days</span>
    <p><strong>Or sort by specific dates</strong></p>

    <div className="form-group mx-sm-1">
      <DropDown />
    </div>
    <div className="form-group mx-sm-1">
      <DropDown />
      <button className="btn btn-dark btn-sm">UPDATE</button>
    </div>

    <div className="form-group mx-sm-1">
      <strong>DISPLAY BY</strong>
      <p><a href="#">Publication Name</a></p>
      <p><a href="#">Popularity</a></p>
    </div>
   </div>
 );
}

export default PastDataFilter;
