import React from 'react';
import {PropTypes} from 'prop-types';
import SocialCount from './SocialCount';

const TweetText = ({tweet_text, tweet_source, user_profile, tweet_created_at, mentioning_profile, like_count, reply_count, retweet_count, tweet_image, picture, facebook_coverphoto_url, message, facebook, share_count, comment_count, comment_message, timestamp, story_tag_name, story, post_url, post_title, note_count, reply_text, reply_user_name, reply_parent_post_url, reply_parent_post_note_count, reply_parent_post_title}) => {
  const p_image  = mentioning_profile || user_profile || picture;
  return(
    <div className="block-box">
    	   <div className="comment-box">
    	   	<div className="icon-right">
    	   </div>
    	   <div className="clearfix"></div>

          <div className="row cnt">
            <div className="col-lg-1 col-md-1">
              {p_image && <img src={p_image} style={{width: "80px"}} />}
            </div>

    	   	<div className="col-lg-7 col-md-7 ml-15">
              <div className="row">
               <div className="">
                  <img src={tweet_image || facebook_coverphoto_url} style={{width: "50%"}} />
               </div>
              </div>
    	   	   <div className="row right-commt">
    	   	   	  <p dangerouslySetInnerHTML={{ __html: tweet_text || message || comment_message || post_title || reply_text }}></p>
                {story && <p> <strong>Story: </strong>  {story} </p>}
                {reply_user_name && <p> <a href={reply_parent_post_url} target="_blank"> <strong>{reply_user_name}</strong> </a> </p>}
                {post_url && <p> <a href={post_url} target="_blank"> <strong>Post Link</strong> </a> </p>}
                {story_tag_name && <p> <strong>Story tag name: </strong>  {story_tag_name} </p>}
                {reply_parent_post_title && <p> <strong>Reply day count: </strong> {reply_parent_post_title}  {story} </p>}
    	   	   	  <span className="smile"><i className="far fa-smile"></i></span>
    	   	   </div>
    	   	</div>
    	   </div>
    	</div>
    	<div className="com-like-box">
    		{timestamp && <span className="time-recive">Recived {timestamp} ago</span>}
        <SocialCount like_count={like_count} reply_count={reply_count || share_count} retweet_count={retweet_count || comment_count || note_count || reply_parent_post_note_count}/>
    	</div>
   </div>
  );
}

TweetText.propTypes = {
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
  picture: PropTypes.string
}

export default TweetText;
