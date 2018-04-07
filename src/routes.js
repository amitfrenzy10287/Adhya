import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import App from './components/App';
import { Route, Switch } from 'react-router-dom';
import {Profile} from './containers/Profile';
import {Chart} from './containers/Chart';
import {Mention} from './containers/Mention';
import {TopTweet, EngagedBy, ListenTo, LatestNews, Tweet, TwitterHashtag, Engage, RepliesGot} from './components/Activity';
import Post from './components/Activity/Facebook/Post';
import EngageBy from './components/Activity/Facebook/EngageBy';
import StoryTag from './components/Activity/Facebook/StoryTag';
import ReplyComment from './components/Activity/Facebook/ReplyComment';
import TumblrPost from './components/Activity/Tumblr/Post';
import EngageWith from './components/Activity/Tumblr/EngageWith';
import TumblrReplies from './components/Activity/Tumblr/TumblrReplies';
import TumblrHashTag from './components/Activity/Tumblr/TumblrHashTag';
import {Activity} from './containers/Activity';

const Routes = ({history, ConnectedRouter}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <App>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/charts" component={Chart}/>
          <Route exact path="/mentions" component={Mention}/>
          <Route exact path="/activity" component={Activity}/>
          <ActivityRoute exact path="/activity/twitter/tweets" component={Tweet} />
          <ActivityRoute exact path="/activity/twitter/hashtags" component={TwitterHashtag} />
          <ActivityRoute exact path="/activity/twitter/engage" component={Engage} />
          <ActivityRoute exact path="/activity/twitter/replies_got" component={RepliesGot} />
          <ActivityRoute exact path="/activity/facebook/posts" component={Post} />
          <ActivityRoute exact path="/activity/facebook/engage_by" component={EngageBy} />
          <ActivityRoute exact path="/activity/facebook/story_tags" component={StoryTag} />
          <ActivityRoute exact path="/activity/facebook/reply_comments" component={ReplyComment} />
          <ActivityRoute exact path="/activity/tumblr/posts" component={TumblrPost} />
          <ActivityRoute exact path="/activity/tumblr/engage_with" component={EngageWith} />
          <ActivityRoute exact path="/activity/tumblr/replies" component={TumblrReplies} />
          <ActivityRoute exact path="/activity/tumblr/hash_tag" component={TumblrHashTag} />
        </App>
      </Switch>
    </ConnectedRouter>
  );
}

Routes.propTypes = {
  history: PropTypes.object,
  ConnectedRouter: PropTypes.func
}
export default Routes;

const ActivityRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
        <Activity {...props}><Component {...props}/></Activity>
  )}/>
);
