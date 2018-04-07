import React from 'react';
import {PropTypes} from 'prop-types';
import * as styles from '../Mention/card-styles.css';
import ProfileImage from '../common/image';

const EngageLink = ({screen_name, profile_image, mentioning_profile}) => {
  return(
   <div className="row panel"> 
    <div className="card1">
        <div className="pull-left">
          <ProfileImage class="user" image={ profile_image } />
        </div>
        <div className="panel-head" >
            {screen_name}
        </div>
        <div className="panel-body">
            dsfdsf
        </div>
    </div>
  </div>

  );
};

EngageLink.propTypes = {
  screen_name: PropTypes.string,
  profile_image: PropTypes.string,
  mentioning_profile: PropTypes.string
};

export default EngageLink;
