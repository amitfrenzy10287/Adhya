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
      handleRetweets: PropTypes.func,
      handleTwitterMention: PropTypes.func,
      handleUserTweeterReplies: PropTypes.func,
      activeCheckbox: PropTypes.object,
      handleFacebookPosts: PropTypes.func
    };
  }
  handleClick = (e,args) => {
    console.log(e.target.id);
  }

  handleSearch = () => {

  }

  render() {
    
    const { handleTwitterMention, handleUserTweets, handleUserTweeterReplies, activeCheckbox, handleRetweets, handleFacebookPosts, handleFacebookMentions} = this.props;
     
    return(
          <div>  
              <div>
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="tweets" id="tweets" checked={false} />
                      <label className="custom-control-label" for="tweets" >News Mentions</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="mention" value="twitter_mentions" id="tweets" checked={(activeCheckbox.name === "twitter_mentions")? "checked": false} />
                      <label className="custom-control-label" onClick={handleTwitterMention} for="tweets" >Twitter Mentions</label>
                  </div> 
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="mention" value="facebook_mentions" checked={(activeCheckbox.name === "facebook_mentions")? "checked": false} />
                      <label className="custom-control-label" onClick={handleFacebookMentions} for="tweets" >Facebook Mentions</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="mention" value="facebook_mentions" checked={(activeCheckbox.name === "facebook_mentions")? "checked": false} />
                      <label className="custom-control-label" onClick={handleFacebookMentions} for="tweets" >Instagram Mentions</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="mention" value="facebook_mentions" checked={(activeCheckbox.name === "facebook_mentions")? "checked": false} />
                      <label className="custom-control-label" onClick={handleFacebookMentions} for="tweets" >Blog Mentions</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="mention" value="facebook_mentions" checked={(activeCheckbox.name === "facebook_mentions")? "checked": false} />
                      <label className="custom-control-label" onClick={handleFacebookMentions} for="tweets" >Youtube Mentions</label>
                  </div>
              </div>
                <div className="dataFilter">
                  <strong>SEE DATA FOR THE PAST</strong>
                  <PastDataFilter />
                </div>  
                
      </div>
    );
  }
}
