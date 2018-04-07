import React from 'react';
import {PropTypes} from 'prop-types';
import * as styles from '../Mention/card-styles.css';
import ProfileImage from '../common/image';

const EngageLink = ({screen_name, profile_image, mentioning_profile}) => {
  return(
    <div className="body-box mention_margin_top col-md-9">
        fhgfh
    </div>    
  );
};

EngageLink.propTypes = {
  screen_name: PropTypes.string,
  profile_image: PropTypes.string,
  mentioning_profile: PropTypes.string
};

export default EngageLink;
