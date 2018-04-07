import React from 'react';
import {PropTypes} from 'prop-types';

const EngageLink = ({screen_name, profile_image, mentioning_profile}) => {
  return(
    <div className="row tweets mt-1">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-2 col-md-3 image">
              <img src={mentioning_profile} />
            </div>

            <div className="col-lg-10 col-md-9">
              <div className="title"><img className="img-responsive tweet-image" src={profile_image} /></div>
              <div className="cont">{screen_name}</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

EngageLink.propTypes = {
  screen_name: PropTypes.string,
  profile_image: PropTypes.string
}

export default EngageLink;
