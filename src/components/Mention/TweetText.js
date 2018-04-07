import React,{ Component } from 'react';
import {PropTypes} from 'prop-types';
import SocialCount from './SocialCount';
import ProfileImage from '../common/image';
import * as Emoticons from '../common/Emoticons'; 


class TweetText extends Component{

constructor(props) {

    super(props);

    this.state = {
        show_retweets:false
    };
}

handleClick = (e,args) => {
   this.setState({show_tweets: !this.state.show_tweets})
   // alert("dfgfd");
}

static get propTypes() {

    return {

      tweet_text: PropTypes.string,
      tweet_source: PropTypes.string,
      story_tag_name: PropTypes.string,
      story: PropTypes.string,
      post_url: PropTypes.string,
      post_title: PropTypes.string,
      note_count: PropTypes.string,
      reply_text: PropTypes.string,
      reply_user_name: PropTypes.string,
      reply_parent_post_url: PropTypes.string,
      reply_parent_post_note_count: PropTypes.string,
      reply_parent_post_title: PropTypes.string,
      user_profile: PropTypes.string,
      picture: PropTypes.string,
      tweet_created_at: PropTypes.string,
      mentioning_profile: PropTypes.string,
      like_count: PropTypes.number,
      reply_count: PropTypes.number,
      retweet_count: PropTypes.number,
      tweet_image: PropTypes.string,
      facebook_coverphoto_url: PropTypes.string,
      message: PropTypes.string,
      facebook: PropTypes.string,
      share_count: PropTypes.number,
      comment_count: PropTypes.number,
      comment_message: PropTypes.string,
      timestamp: PropTypes.string,
      handleClick:PropTypes.func 
    };
  }

render(){ 

      const src           ="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg";
      var date            = new Date(Date.now("dd-mm-yyyy")).toLocaleString();   
      var tweet_text      = this.props.tweet_text;
      var tweet_source    = this.props.tweet_source;
      var user_profile    = this.props.user_profile;
      var tweet_created_at= this.props.tweet_created_at;
      var mentioning_profile= this.props.mentioning_profile;
      var reply_parent_tweet= this.props.reply_parent_tweet;
      var reply_user_profile_image= this.props.reply_user_profile_image;
      var like_count = this.props.like_count;
      var reply_count= this.props.reply_count;
      var retweet_count= this.props.retweet_count;
      var tweet_image= this.props.tweet_image;
      var picture= this.props.picture;
      var facebook_coverphoto_url= this.props.facebook_coverphoto_url;
      var sentiment= this.props.sentiment;
      var message= this.props.message;
      var facebook= this.props.facebook;
      var share_count= this.props.share_count;
      var comment_count= this.props.comment_count;
      var comment_message= this.props.comment_message;
      var timestamp = this.props.timestamp; 
      var story_tag_name = this.props.story_tag_name;
      var story= this.props.story;
      var post_url= this.props.post_url;
      var post_title = this.props.post_title;
      var note_count = this.props.note_count;
      var reply_to_user_text = this.props.reply_to_user_text; 
      var reply_text = this.props.reply_text;
      var reply_user_screen_name= this.props.reply_user_screen_name;
      var reply_user_name= this.props.reply_user_name;
      var reply_parent_post_url= this.props.reply_parent_post_url;
      var reply_parent_post_note_count= this.props.reply_parent_post_note_count;
      var reply_parent_post_title = this.props.reply_parent_post_title;  
      const p_image  = mentioning_profile || user_profile || picture;
      const defaultImg = "http://via.placeholder.com/140x100";
  return(

    <div className="row">
      <div className="userProfile">
            <ProfileImage image={src} class="rounded-circle" width="100px" />
      </div>
      <div className="panel tweetCardPanel col-md-10">
          <div className="padding-5 ">  
            <div className={tweet_text?"tweetCard":"tweetCard"}> 

              <div className="panel-body card-body">
                <div className="pull-left"> 
                  <ProfileImage image={tweet_image ||
                   reply_user_profile_image ||
                    facebook_coverphoto_url || defaultImg} 
                    class="profile_img"
                     />
                </div>
                <p dangerouslySetInnerHTML={{ __html: tweet_text || message || reply_parent_tweet || comment_message || post_title || reply_text }}></p>
                {story && <p> <strong>Story: </strong>  {story} </p>}
                {reply_user_name && <p> <a href={reply_parent_post_url} target="_blank"> <strong>{reply_user_name}</strong> </a> </p>}
                {post_url && <p> <a href={post_url} target="_blank"> <strong>Post Link</strong> </a> </p>}
                {story_tag_name && <p> <strong>Story tag name: </strong>  {story_tag_name} </p>}
                {reply_parent_post_title && <p> <strong>Reply day count: </strong> {reply_parent_post_title}  {story} </p>}
                <span data-toggle="tooltip" title="Neutral"  className="smile float-right"><img alt="Emoticons neutral" src={Emoticons.neutral} /> </span> 
                <div data-toggle="tooltip" title={sentiment=='Neutral'?"Neutral":sentiment=='Postitve'?"Positive":"No Sentiment"} className={sentiment=='Neutral'?"sentiments bg-yellow":sentiment=='Postitve'?"sentiments bg-green":"sentiments bg-grey"}>&nbsp;</div> 
              </div>
            <div className="com-like-box panel-footer">
              <span><strong>Published date</strong> : {date} </span>
              <SocialCount click={this.handleClick} like_count={like_count} reply_count={reply_count || share_count} retweet_count={retweet_count || comment_count || note_count || reply_parent_post_note_count}/>
                  
                  <div className={this.state.show_tweets && reply_parent_tweet?"show retweetCards":"hide"}> 
                        <div className="userProfile retweetProfile">
                              <ProfileImage image={defaultImg} class="rounded-circle" width="100px" height="100px" />
                        </div>
                        <div className="panel-body"> 
                          <h5><strong>{reply_user_screen_name?reply_user_screen_name:null}</strong></h5>
                          <p>{reply_to_user_text?reply_to_user_text:null}</p>  
                        </div> 
                  </div>
            </div> 

            </div>

          </div>
        </div>
    </div> 
  );
 
 }

}
 

export default TweetText;
