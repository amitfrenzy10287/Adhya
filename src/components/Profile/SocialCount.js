import React from 'react';
import {PropTypes} from 'prop-types';

const SocialCount = ({twitterUser}) => {
  return (
    <div className="row">
        <div className="col-lg-2">
          <div className="card text-center card-min-100 bg-gray">
            <div className="card-body">
              1
              <p>MEDIA POWER RANK</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="card text-center card-min-100 bg-menu">
            <div className="card-body">
              {twitterUser.follower_lifetime}
              <p>FOLLOWERS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="card text-center card-min-100 bg-menu">
            <div className="card-body">
              10,369
              <p>FANS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="card text-center card-min-100 bg-menu">
            <div className="card-body">
                {twitterUser.retweet_lifetime}
              <p>LIFETIME TWEETS</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="card text-center card-min-100 bg-menu">
            <div className="card-body">
                {twitterUser.mention_by_handle_lifetime}
              <p>MENTIONS LAST 7 DAYS</p>
            </div>
          </div>
        </div>
    </div>
  );
};

SocialCount.propTypes = {
  twitterUser: PropTypes.object
};

export default SocialCount;
