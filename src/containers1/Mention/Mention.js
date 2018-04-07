import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import ScrollArea from 'react-scrollbar';
import {MentionFilter, TweetText} from '../../components/Mention';
import {fetchMentions, fetchTwitterMentions, fetchTwitterTweets, fetchTweetsUserReplies, fetchRetweets, fetchFacebookPosts, fetchFacebookMentions} from '../../reducers/mention';

@connect((state) => ({
  mention: state.mention
}))

export default class Mention extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      mentions: PropTypes.object
    };
  }

  state = {activeCheckbox: {name: "twitter_mentions", checked: true} }
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMentions());
  }

  handleTwitterMention = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} })
      dispatch(fetchTwitterMentions())
    }
  }

  handleUserTweets = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      dispatch(fetchTwitterTweets())
      this.setState({ activeCheckbox: {name: e.target.value} })
    }
  }

  handleUserTweeterReplies = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} })
      dispatch(fetchTweetsUserReplies())
    }

  }

  handleRetweets = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} })
      dispatch(fetchRetweets());
    }
  }

  handleFacebookPosts = (e) => {
    const {dispatch} = this.props;
    console.log("I AM REPLIES CALL")
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} })
      dispatch(fetchFacebookPosts());
    }
  }

  handleFacebookMentions = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} })
      dispatch(fetchFacebookMentions());
    }
  }

  render() {
    const {mentions} = this.props.mention;
    const {activeCheckbox} = this.state;
    return(
      <div>
        <div className="row">
          <div className="form-group mx-sm-1 export-btn">
            <button className="btn btn-default btn-sm">EXPORT</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3  text-left content-left">
            <ScrollArea speed={0.8}>
              <div className="LeftMenu rounded p-2">
                <MentionFilter
                  handleTwitterMention={this.handleTwitterMention}
                  handleUserTweets={this.handleUserTweets}
                  activeCheckbox={activeCheckbox}
                  handleUserTweeterReplies={this.handleUserTweeterReplies}
                  handleRetweets={this.handleRetweets}
                  handleFacebookPosts={this.handleFacebookPosts}
                  handleFacebookMentions={this.handleFacebookMentions}
                  />
              </div>
            </ScrollArea>

          </div>

          <div className="col-lg-8 col-md-7  content-right ml-2">
              {mentions && mentions.map((i, key)=> <TweetText key={key} {...i}/>) }
          </div>
        </div>
    </div>
    );
  }
}
