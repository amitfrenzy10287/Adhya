import React from 'react';
import {PropTypes} from 'prop-types';

 const SocialCount = ({like_count, reply_count, retweet_count }) => {
   return(
     <div className="rigght-commt-icone">
         <span><i className="far fa-thumbs-up"></i> {like_count}</span>
         <span><i className="fas fa-share-alt"></i> {reply_count}</span>
         <span><i className="far fa-comment-alt"></i> {retweet_count}</span>
     </div>
   );
 }

 export default SocialCount
