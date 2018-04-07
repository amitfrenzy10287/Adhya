import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import * as Icons from '../common/Icons';


class SocialCount extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show_tweets: false,
        };
    }

    static get propTypes() {
      return {
          like_count: PropTypes.number,
          reply_count: PropTypes.number,
          retweet_count: PropTypes.number, 
          click:PropTypes.func,
      }
    }  


    render(){

        const handleClick           = this.props.click;
        var like_count              = this.props.like_count;
        var reply_count             = this.props.reply_count;
        var retweet_count           = this.props.retweet_count;

        return(
           <div className="rigght-commt-icone float-right">
               <span><img alt="Twitter likes" src={Icons.likeIcon} /> <b>{like_count?like_count:0} </b></span>
               <span><img alt="Twitter share" src={Icons.shareIcon} /><b> {reply_count?reply_count:0}</b></span>
               <span><img alt="Twitter comment" onClick={handleClick} src={Icons.retweetIcon} /><b> {retweet_count?retweet_count:0}</b></span>
           </div> 
        );
    }
 } 
 

 export default SocialCount;
