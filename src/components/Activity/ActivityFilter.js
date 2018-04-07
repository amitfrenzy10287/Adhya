import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link,Redirect,IndexRoute} from 'react-router-dom';
import {TextBox} from '../FormInput'; 
import fonts from 'react-fontawesome';
import { SocialIcon } from 'react-social-icons'; 
import ScrollArea from 'react-scrollbar';
import { browserHistory } from 'react-router';

@connect(state => ({
  profile: state.profile, 
}))


export default class ActivityFilter extends Component {

constructor(props) {
    super(props);

    this.state = {
        tweets_checked: false,
        replies_got_checked: false,
        hashtags_checked: false,
        quoted_tweets_checked: false,
        engaged_by_checked: false,
        facebook_posts_checked:false,
        facebook_engage_by_checked:false,
        facebook_comments_made_checked:false,
        facebook_story_tags_made_checked:false,
    };
}

static get propTypes() {
    return {
      handleFacebookMentions: PropTypes.func,
      handleUserTweets: PropTypes.func,
      handleRetweets: PropTypes.func,
      handleTwitterMention: PropTypes.func,
      handleUserTweeterReplies: PropTypes.func,
      activeCheckbox: PropTypes.object,
      handleFacebookPosts: PropTypes.func, 
    };
  }

  static get contextTypes(){
      return{
          router: React.PropTypes.func.isRequired,
          pathname: React.PropTypes.object, 
          detail: React.PropTypes.object,  
      }; 
  }

  componentDidMount(){

       var loc = this.context.router.history.location.state;
       
       switch(loc){
          case 'tweets':
              return this.setState({tweets_checked:true});
          case 'replies_got':
              return this.setState({replies_got_checked:true});
          case 'hashtags':
              return this.setState({hashtags_checked:true});
          case 'engaged_by':
              return this.setState({engaged_by_checked:true});
          case 'quoted_tweets':
              return this.setState({quoted_tweets_checked:true});
          case 'quoted_tweets':
              return this.setState({quoted_tweets_checked:true});
           
          case 'facebook_posts':
              return this.setState({facebook_posts_checked:true});
          case 'facebook_engage_by':
              return this.setState({facebook_engage_by_checked:true});
          case 'facebook_comments_made':
              return this.setState({facebook_comments_made_checked:true});
          case 'facebook_story_tags_made':
              return this.setState({facebook_story_tags_made_checked:true}); 
          default:
               this.setState({
                    tweets_checked:false,
                    replies_got_checked:false,
                    hashtags_checked:false,
                    engaged_by_checked:false,
                    quoted_tweets_checked:false,
                    facebook_posts_checked:false,
                    facebook_engage_by_checked:false,
                    facebook_comments_made_checked:false,
                    facebook_story_tags_made_checked:false,
               });    
       } 
  }


    handleClick(e,args) {

        e.preventDefault();
        
        if(args=='tweets'){

             this.setState({ 
                tweets_checked:!this.state.tweets_checked
             });
             this.context.router.history.push(
                  "/activity/twitter/tweets", 'tweets'
             );
        } 
        if(args=='replies_got'){
            this.setState({replies_got_checked:!this.state.replies_got_checked});
            this.context.router.history.push("/activity/twitter/replies_got","replies_got" 
            );  
        }
        if(args=='hashtags'){
            this.setState({hashtags_checked:!this.state.hashtags_checked});
            this.context.router.history.push("/activity/twitter/hashtags","hashtags");  
        }
        if(args=='engaged_by'){
            this.setState({engaged_by_checked:!this.state.engaged_by_checked});
            this.context.router.history.push("/activity/twitter/engage","engaged_by");  
        }
        if(args=='quoted_tweets'){
            this.setState({quoted_tweets_checked:!this.state.quoted_tweets_checked});
            this.context.router.history.push("/activity/twitter/tweets","quoted_tweets");  
        }
        if(args=='facebook_posts'){
            this.setState({facebook_posts_checked:!this.state.facebook_posts_checked});
            this.context.router.history.push("/activity/facebook/posts","facebook_posts");  
        }
        if(args=='facebook_engage_by'){
            this.setState({facebook_engage_by_checked:!this.state.facebook_engage_by_checked});
            this.context.router.history.push("/activity/facebook/engage_by","facebook_engage_by");  
        }
        if(args=='facebook_comments_made'){
            this.setState({facebook_comments_made_checked:!this.state.facebook_comments_made_checked});
            this.context.router.history.push("/activity/facebook/reply_comments","facebook_comments_made");  
        }
        if(args=='facebook_story_tags_made'){
            this.setState({facebook_story_tags_made_checked:!this.state.facebook_story_tags_made_checked});
            this.context.router.history.push("/activity/facebook/story_tags","facebook_story_tags_made");  
        }
    }

  render() {
    const { handleTwitterMention, handleUserTweets, handleClick, activeCheckbox,value} = this.props; 
    var segment_str = window.location.href;
    var segment_array = segment_str.split( '/' );
    var last_segment = segment_array.pop();
    var area = last_segment=='tweets'?true:false;
    var collapse = (last_segment=='tweets' || last_segment=='engage' || last_segment=='hashtags' || last_segment=='replies_got') ?'collapse in':'collapse';
    var active = (last_segment=='tweets' || last_segment=='engage') ?'list-group-item list-group-item-info':'list-group-item';
    var cls_tweets = (last_segment=='tweets') ?'list-group-item list-group-item-info':'list-group-item';
    var cls_replies_got = (last_segment=='replies_got') ?'list-group-item list-group-item-info':'list-group-item';
    var cls_hashtags = (last_segment=='hashtags') ?'list-group-item list-group-item-info':'list-group-item';
    var cls_engage = (last_segment=='engage') ?'list-group-item list-group-item-info':'list-group-item'; 
    // console.log("last_segment",last_segment);   
    return(
      <ScrollArea speed={0.8}>
         <div className="leftMenu">
              <div className="filter">
                <h5>Filter</h5>
                <div className="innerFilter">
                     <h6> TWITTER </h6>   
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="tweets" id="tweets" checked={this.state.tweets_checked} />
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'tweets')} for="tweets" >Tweets</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.replies_got_checked} />
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'replies_got')} for="customCheck1">Replies Made</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input"  checked={this.state.hashtags_checked} />
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'hashtags')}  for="customCheck1">Hashtags</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input"  checked={this.state.quoted_tweets_checked} />
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'quoted_tweets')} for="customCheck1">Quoted Tweets</label>
                     </div>   
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.engaged_by_checked} />
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'engaged_by')}  for="customCheck1">Engaged By</label>
                     </div>
                     <h6> FACEBOOK </h6>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.facebook_posts_checked}/>
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'facebook_posts')} for="customCheck1">Post</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.facebook_engage_by_checked}/>
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'facebook_engage_by')} for="customCheck1">Engaged By</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.facebook_comments_made_checked}/>
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'facebook_comments_made')} for="customCheck1">Comments made</label>
                     </div>
                     <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" checked={this.state.facebook_story_tags_made_checked}/>
                      <label className="custom-control-label" onClick={(e) => this.handleClick(e,'facebook_story_tags_made')} for="customCheck1">Story tags made</label>
                     </div> 
                </div>

              </div>       
        </div>
      </ScrollArea>   
    );
  }
}
