import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import * as style from '../../assets/css/style.css';
import profile from '../../assets/images/profile.jpg';
import bgblue from '../../assets/images/blue-bg-main.png';//bg_image.png

const Header = ({pathname}) => {
  const src="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg";
  return (
      <div>
      <div className="header"> 
        <div className="banner-top" style={{backgroundImage: `url(${bgblue})`,backgroundRepeat:"repeat"}}></div>
        <div className="header-top">
          <div className="row mar-top-10">
            <div className="col-md-2">&nbsp;</div> 
            <div className="col-md-2">
                <strong>1</strong><br/>
                <small>MEDIA POWER RANK</small>
            </div> 
            <div className="col-md-2">
                <strong>55,999,003</strong><br/>
                <small>FOLLOWERS</small>
            </div>
            <div className="col-md-2">
                <strong>45,000,987</strong><br/>
                <small>FANS</small>
            </div>
            <div className="col-md-2">
                <strong>30,000</strong><br/>
                <small>LIFETIME TWEETS</small>
            </div>
            <div className="col-md-2">
                <strong>7,131</strong><br/>
                <small>MENTIONS LAST 7 DAYS</small>
            </div> 
          </div>  
        </div>
        <div className="profile_pic">
          <img alt="Profile" src={src} />
        </div>    
        <div className="user_info">
          <span className="username">NARENDRA MODI</span>
          <small>PRIME MINISTER OF INDIA</small>
          
        </div>
        <div className="following">
          <button className="btn btn-outline-primary btn-lg">Following</button>
        </div>
         <div className="menu col-md-8">
         <nav className="navbar navbar-expand-sm navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="">Profile <span className="sr-only">(current)</span></a>
                </li>
                <li className={pathname=='dashboard'?"nav-item active":"nav-item"}>
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className={pathname=='activity'?"nav-item active":"nav-item"}>
                  <Link className="nav-link" to="/activity/twitter/tweets">Activity</Link>
                </li> 
                <li className={pathname=='mentions'?"nav-item active":"nav-item"}>
                  <Link className="nav-link" to="/mentions">Mentions</Link>
                </li> 
                <li className={pathname=='analytics'?"nav-item active":"nav-item"}>
                  <Link className="nav-link" to="/analytics">Analytics</Link>
                </li> 
              </ul>
            </div>
          
        </nav>  
      </div>
      </div>
      </div>
  );
};

Header.propTypes = {
  pathname: PropTypes.string
};

export default Header;
