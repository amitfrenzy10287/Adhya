import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import ScrollArea from 'react-scrollbar';
import {MentionFilter, TweetText} from '../../components/Mention';
import addIcon from '../../assets/images/+.png';

import {fetchMentions, fetchTwitterMentions, fetchTwitterTweets, fetchTweetsUserReplies, fetchRetweets, fetchFacebookPosts, fetchFacebookMentions} from '../../reducers/mention';

@connect((state) => ({
  mention: state.mention
}))

export default class Mention extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      mention: PropTypes.object
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
      this.setState({ activeCheckbox: {name: e.target.value} });
      dispatch(fetchTwitterMentions());
    }
  }

  handleUserTweets = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      dispatch(fetchTwitterTweets());
      this.setState({ activeCheckbox: {name: e.target.value} });
    }
  }

  handleUserTweeterReplies = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} });
      dispatch(fetchTweetsUserReplies());
    }

  }

  handleRetweets = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} });
      dispatch(fetchRetweets());
    }
  }

  handleFacebookPosts = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} });
      dispatch(fetchFacebookPosts());
    }
  }

  handleFacebookMentions = (e) => {
    const {dispatch} = this.props;
    if(e.target.checked) {
      this.setState({ activeCheckbox: {name: e.target.value} });
      dispatch(fetchFacebookMentions());
    }
  }

  render() {
    const {mentions} = this.props.mention;
    const {activeCheckbox} = this.state;
    return(
      <div className="row col-md-12">
              
              <div className="leftMenu menu-box metionFilter_margin_left filter">
                <h5>Filter</h5> 
                    <div className="innerFilter">
                
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
              </div>  
            

            <div className="body-box mention_margin_top col-md-9">
            <button className="btn-facebook exportButton exportBtnPos float-right"><img src={addIcon} alt="add Icon" />Export</button>
              <div className="tweetBody">
              {mentions && mentions.map((i, key)=> <TweetText key={key} {...i}/>)}
              </div>
            </div>
    </div> 
    );
  }
}
