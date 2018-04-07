import React from 'react';
import {PropTypes} from 'prop-types';
import SocialCount from '../Mention/SocialCount';

const HashTag = ({ hashtags_metric, count }) => {
  return (
    <div className="block-box">
      <div className="comment-box">
        <p><strong>{hashtags_metric}</strong></p>
      </div>
      <div className="com-like-box">
        <SocialCount like_count={count} />
      </div>
    </div>
  );
};

HashTag.propTypes = {
  hashtags_metric: PropTypes.string,
  count: PropTypes.string
};

export default HashTag;
