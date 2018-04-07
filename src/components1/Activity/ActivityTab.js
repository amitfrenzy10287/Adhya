import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const ActivityTab = ({pathname}) => {
  return (
      <div>
      <div className="container menu-cl">
          <button type="button" className={`btn ${(pathname == '/activity/latest_news')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}> <Link to="/activity/latest_news">Latest News</Link></button>
          <button type="button" className={`btn ${(pathname == '/activity/top_tweets')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/activity/top_tweets">Top Tweets</Link></button>
          <button type="button" className={`btn ${(pathname == '/activity/engaged_by')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/activity/engaged_by">Engaged By</Link></button>
          <button type="button" className={`btn ${(pathname == '/activity/listens_to')? 'btn-success' : 'btn-primary' }  mr-1 px-5`}><Link to="/activity/listens_to">Listens To</Link></button>
      </div>
    </div>
  );
};

ActivityTab.propTypes = {
  pathname: PropTypes.string
}

export default ActivityTab;
