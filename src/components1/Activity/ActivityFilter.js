import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {TextBox} from '../FormInput';

@connect(state => ({
  profile: state.profile
}))

export default class ActivityFilter extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func
    };
  }

  handleSearch = () => {

  }

  render() {
    const { handleTwitterMention, handleUserTweets, handleClick, value} = this.props;
    return(
          <div>

            <div>
              <strong>Twitter</strong>
              <ul className="list">
                <li className="active"><Link to="/activity/twitter/tweets">Tweets</Link></li>
                <li><Link to="/activity/twitter/replies_got">Replies Got</Link></li>
                <li><Link to="/activity/twitter/hashtags">Hash tag</Link></li>
                <li><a href="#">Quoted tweets</a></li>
                <li><Link to="/activity/twitter/engage">Engage</Link></li>
              </ul>
            </div>

            <div>
              <strong>Facebook</strong>
              <ul>
                <li><Link to="/activity/facebook/posts">Posts</Link></li>
                <li><Link to="/activity/facebook/engage_by">Engaged By</Link></li>
                <li><Link to="/activity/facebook/reply_comments">Reply/Comment</Link></li>
                <li><Link to="/activity/facebook/story_tags">Story tags</Link></li>
              </ul>
            </div>

            <div>
              <strong>Tumblr</strong>
              <ul>
                <li><Link to="/activity/tumblr/posts">Posts</Link></li>
                <li><Link to="/activity/tumblr/engage_with">Engaged with</Link></li>
                <li><Link to="/activity/tumblr/replies">Replies</Link></li>
                <li><Link to="/activity/tumblr/hash_tag">Hash tag</Link></li>
              </ul>
            </div>

      </div>
    );
  }
}
