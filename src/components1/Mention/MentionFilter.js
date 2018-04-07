import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {Link,IndexLink} from 'react-router';
import PastDataFilter from './PastDataFilter';
import BrowseByAlphabet from './BrowseByAlphabet';
import {Alphabets} from '../../config';
import {TextBox} from '../FormInput';

export default class MentionFilter extends Component {
  static get propTypes() {
    return {
      handleFacebookMentions: PropTypes.func,
      handleUserTweets: PropTypes.func,
      handleRetweets: PropTypes.func
    };
  }
  handleClick = (e) => {
    console.log(e.target.id);
  }

  handleSearch = () => {

  }

  render() {
    const { handleTwitterMention, handleUserTweets, handleUserTweeterReplies, activeCheckbox, handleRetweets, handleFacebookPosts, handleFacebookMentions} = this.props;
    console.log("activeCheckbox", activeCheckbox);
    return(
          <div>
            <div>
              <strong>FILTERS</strong>
              <form>

                <div className="form-check ml-2">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="mention" value="news_mentions" checked={(activeCheckbox.name === "news_mentions")? "checked": false}/>
                    News Mentions
                  </label>
                </div>

                <div className="form-check ml-2">
                  <label className="form-check-label">
                    <input className="form-check-input" name="mention" type="checkbox" value="twitter_mentions" onChange={handleTwitterMention} checked={(activeCheckbox.name === "twitter_mentions")? "checked": false}/>
                    Twitter Mentions
                  </label>
                </div>

                <div className="form-check ml-2">
                  <label className="form-check-label">
                    <input className="form-check-input" name="mention" type="checkbox" value="facebook_mentions" onChange={handleFacebookMentions} checked={(activeCheckbox.name === "facebook_mentions")? "checked": false}/>
                    Facebook Mentions
                  </label>
                </div>

            </form>
            <div>
              <strong>SEE DATA FOR THE PAST</strong>
              <PastDataFilter />
            </div>

            <div className="">
              <BrowseByAlphabet data={Alphabets} handleClick={this.handleClick}/>
            </div>

            <div>
              <TextBox onChange={this.handleSearch} name="search" label={`Search within result`}/>
              <button className="btn btn-dark btn-sm">SEARCH</button>
            </div>

          </div>
      </div>
    );
  }
}
