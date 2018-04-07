import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const Header = ({pathname}) => {
  return (
      <div>
      <div className="container mb-2">
        <div className="row">
            <div className="col-lg-12 bg-faded">
              <div className="image">
                <img src="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg" style={{width: 50, height: 70}}/>
                <span className="mx-2">Narendra Modi</span>
                <span><button type="button" className="btn btn-outline-warning">Following</button></span>
              </div>
            </div>
        </div>
      </div>
      <div className="container  mb-2 menu-cl">
          <button type="button" className={`btn ${(pathname == 'profile')? 'btn-success' : 'btn-primary' } px-5`}> <Link to="/profile">Profile</Link></button>
          <button type="button" className={`btn ${(pathname == 'activity')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/activity">Activity</Link></button>
          <button type="button" className={`btn ${(pathname == 'mentions')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/mentions">Mentions</Link></button>
          <button type="button" className="btn btn-primary mr-1 px-5">Ranking</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  pathname: PropTypes.string
}

export default Header;
