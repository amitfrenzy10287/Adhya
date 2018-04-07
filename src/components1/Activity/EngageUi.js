import React from 'react';
import {PropTypes} from 'prop-types';

const EngageUi = ({ facebook_engaged_users, tumblr_engaged_users }) => {
  return (
    <div className="block-box">
      <div className="comment-box">
        <p><strong>{ facebook_engaged_users ||  tumblr_engaged_users }</strong></p>
      </div>
      <div className="com-like-box"></div>
   </div>
  );
}

EngageUi.propTypes = {
  facebook_engaged_users: PropTypes.string,
  tumblr_engaged_users: PropTypes.string
};

export default EngageUi;
