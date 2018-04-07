import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';

export default class ChartFilter extends Component {
  render() {
    return(
          <div>
            <div className="row grayBorder text-left px-2">
              <p>Metrics</p>
            </div>
            <div>
              <strong>NEWS</strong>
              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="news_mentions" />
                  News Mentions
                </label>
              </div>
            </div>

            <div>
              <strong>TWITTER</strong>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="news_mentions" />
                  Mentions
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="news_mentions_by_handle" />
                  Mentions by handle
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="news_mentions_by_name" />
                  Mentions by name
                </label>
              </div>
              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="followers" />
                  Followers
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="followers_growth" />
                  Follower Growth
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="following" />
                  Following
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="retweets" />
                  Retweets
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="tweets" />
                  Tweets
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="lifetime_tweets" />
                  Lifetime Tweets
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="replies" />
                  Replies
                </label>
              </div>
            </div>

            <div>
              <strong>FACEBOOK</strong>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="fans" />
                  Fans
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="fans_growth" />
                  Fans Growth
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="likes" />
                  Likes
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="comments" />
                  Comments
                </label>
              </div>

              <div className="form-check ml-2">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="posts" />
                  Posts
                </label>
              </div>

          </div>
      </div>
    );
  }
}
