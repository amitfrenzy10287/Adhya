import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import * as Icons from '../../common/Icons';


class FacebookCount extends Component{ 

    static get propTypes() {
      return {
          like_count: PropTypes.number,
          reply_count: PropTypes.number,
          retweet_count: PropTypes.number, 
          click:PropTypes.func,
      }
    }  


    render(){

      const handleClick             = this.props.click;
      var angry_count               = this.props.angry_count;
      var comment_count             = this.props.comment_count;
      
      var haha_count                = this.props.haha_count;
      var like_count                = this.props.like_count;
      var love_count                = this.props.love_count;
       
      var sad_count                 = this.props.sad_count;
       
      var share_count               = this.props.share_count;
      var wow_count                 = this.props.wow_count; 

        return(
           <div className="rigght-commt-icone float-right">
               <span><img alt="Facebook angry count" src={Icons.likeIcon} /><b> {angry_count}0</b></span>
               <span><img alt="Facebook comment count" src={Icons.shareIcon} /><b> {comment_count}0</b></span>
               <span><img alt="Facebook haha count" src={Icons.retweetIcon} /><b> {haha_count}0</b></span>
               
           </div> 
        );
    }
 } 
 

 export default FacebookCount;