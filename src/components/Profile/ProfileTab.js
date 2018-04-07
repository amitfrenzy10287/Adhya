import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const ProfileTab = ({pathname}) => {
  return (
      <div>
      <div className="container menu-cl">
          <button type="button" className={`btn ${(pathname == '/profile')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}> <Link to="/profile">Latest News</Link></button>
          <button type="button" className={`btn ${(pathname == '/profile/top_tweets')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/profile/top_tweets">Top Tweets</Link></button>
          <button type="button" className={`btn ${(pathname == '/profile/engaged_by')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/profile/engaged_by">Engaged By</Link></button>
          <button type="button" className={`btn ${(pathname == '/profile/listens_to')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/profile/listens_to">Listens To</Link></button>
      </div>
    </div>
  );
};

ProfileTab.propTypes = {
  pathname: PropTypes.string
};

export default ProfileTab;
