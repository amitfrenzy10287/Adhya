import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import FacebookCount from './Facebook/FacebookCount';
import * as Emoticons from '../common/Emoticons'; 
import ProfileImage from '../common/image';

class EngageUi extends Component{

    static get propTypes() {
      
      return {

          facebook_engaged_users: PropTypes.string,
          tumblr_engaged_users: PropTypes.string,
          angry_count: PropTypes.string,
          comment_count: PropTypes.string,
          facebook_coverphoto_url: PropTypes.string,
          haha_count: PropTypes.string,
          like_count: PropTypes.string,
          love_count: PropTypes.string,
          message: PropTypes.string,
          picture: PropTypes.string,
          sad_count: PropTypes.string,
          sentiment: PropTypes.string,
          share_count: PropTypes.string,
          wow_count: PropTypes.string,
      };
    }

    handleClick = (e,args) => {
       // this.setState({show_tweets: !this.state.show_tweets})
       // alert("dfgfd");
    }

    render(){
      const src                     ="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg";
      var date                      = new Date(Date.now("dd-mm-yyyy")).toLocaleString(); 
      var facebook_engaged_users    = this.props.facebook_engaged_users;
      var angry_count               = this.props.angry_count;
      var comment_count             = this.props.comment_count;
      var user_profile              = this.props.user_profile;
      var facebook_coverphoto_url   = this.props.facebook_coverphoto_url;
      var haha_count                = this.props.haha_count;
      var like_count                = this.props.like_count;
      var love_count                = this.props.love_count;
      var message                   = this.props.message;
      var picture                   = this.props.picture;
      var sad_count                 = this.props.sad_count;
      var sentiment                 = this.props.sentiment; 
      var share_count               = this.props.share_count;
      var wow_count                 = this.props.wow_count; 
      const defaultImg              = "http://via.placeholder.com/140x100";

          return(
    <div className="row">
            <div className="userProfile">
                  <ProfileImage image={src} class="rounded-circle" width="100px" />
            </div>

              <div className="panel tweetCardPanel col-md-10">
                <div className="padding-5 ">  
                  <div className="tweetCard"> 
                    <div className="panel-body card-body">
                        <div className="pull-left"> 
                          <ProfileImage image={defaultImg} class="profile_img" />
                        </div>
                       <p dangerouslySetInnerHTML={{ __html: facebook_engaged_users}}></p>
                        <span data-toggle="tooltip" title="Neutral"  className="smile float-right"><img alt="Emoticons neutral" src={Emoticons.neutral} /> </span> 
                        <div data-toggle="tooltip" 
                        title={sentiment=='Neutral'?"Neutral":sentiment=='Postitve'?"Positive":"No Sentiment"}
                         className={sentiment=='Neutral'?"sentiments bg-yellow":sentiment=='Postitve'?"sentiments bg-green":"sentiments bg-grey"}
                         >&nbsp;</div>
                    </div> 
                    <div className="com-like-box panel-footer">
                      <span><strong>Published date</strong> : {date} </span>
                      <FacebookCount click={this.handleClick} angry_count={angry_count} comment_count={comment_count} 
                      haha_count={haha_count} like_count={like_count} love_count={love_count}
                      sad_count={sad_count} share_count={share_count} wow_count={wow_count}  />
                    </div>
                  </div>
                </div>
              </div>

      </div>

          );
    }
}
 

export default EngageUi;
