import React from 'react';
import {PropTypes} from 'prop-types';
import { DropDown } from '../FormInput';
import DateTimeField from 'react-bootstrap-datetimepicker';
import imgCal from '../../assets/images/calendar.png';//bg_image.png

const PastDataFilter = () => {
 return(
   <div>
    <span>1 Day</span> | <a href="javascript:;"> 7 Days </a> | <span>30 Days</span>
    <p className="sortPastDate"><strong>Or sort by specific dates</strong></p>

    <div className="form-group mx-sm-1">
      <DateTimeField />
    </div>
    <div className="form-group mx-sm-1"> 
            <DateTimeField /> 
      <button className="btn-facebook exportButton exportBtnPos bg-blue filter-btn-sm">UPDATE</button>
    </div>

    <div className="form-group mx-sm-1">
      <strong>DISPLAY BY</strong>
      <p><a href="#">Publication Name</a></p>
      <p><a href="#">Popularity</a></p>
    </div>
   </div>
 );
};

export default PastDataFilter;
