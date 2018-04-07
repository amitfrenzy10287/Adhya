<div>
              <strong>Twitter</strong>
              <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/activity/twitter/tweets" className="btn btn-block btn-social btn-twitter">
                         Tweets            
                    </Link>
                </li>
                <li className="list-group-item"><Link to="/activity/twitter/replies_got">Replies Got</Link></li>
                <li className="list-group-item"><Link to="/activity/twitter/hashtags">Hash tag</Link></li>
                <li className="list-group-item"><a href="#">Quoted tweets</a></li>
                <li className="list-group-item"><Link to="/activity/twitter/engage">Engage</Link></li>
              </ul>
            </div>

            <div>
              <strong>Facebook</strong>
              <ul  className="list-group">
                <li  className="list-group-item"><Link to="/activity/facebook/posts">Posts</Link></li>
                <li  className="list-group-item"><Link to="/activity/facebook/engage_by">Engaged By</Link></li>
                <li  className="list-group-item"><Link to="/activity/facebook/reply_comments">Reply/Comment</Link></li>
                <li  className="list-group-item"><Link to="/activity/facebook/story_tags">Story tags</Link></li>
              </ul>
            </div>

            <div>
              <strong>Tumblr</strong>
              <ul  className="list-group">
                <li  className="list-group-item"><Link to="/activity/tumblr/posts">Posts</Link></li>
                <li  className="list-group-item"><Link to="/activity/tumblr/engage_with">Engaged with</Link></li>
                <li  className="list-group-item"><Link to="/activity/tumblr/replies">Replies</Link></li>
                <li  className="list-group-item"><Link to="/activity/tumblr/hash_tag">Hash tag</Link></li>
              </ul>
            </div>
/*=======================================================================================================*/
            <div>
                <div className="container-fluid">
                  <div className="row">
                    <div>
                      
                      <div id="MainMenu">
                        <div className="list-group panel">
                          <a href="#demo3" className={active} data-toggle="collapse" data-parent="#MainMenu">Twitter</a>
                          <div className={collapse} id="demo3" aria-expanded={area} >
                            <Link to="/activity/twitter/tweets" 
                            className={cls_tweets} value="1" >
                                 Tweets            
                            </Link>
                            <Link className={cls_replies_got} value="2" to="/activity/twitter/replies_got">Replies Got</Link>
                            <Link className={cls_hashtags} value="3" to="/activity/twitter/hashtags">Hash tag</Link>
                            <a className="list-group-item" href="#" value="4">Quoted tweets</a>
                            <Link className={cls_engage} value="4" to="/activity/twitter/engage">Engage</Link> 
                          </div>
                          <a href="#demo4" className="list-group-item list-group-item" data-toggle="collapse" data-parent="#MainMenu">Facebook</a>
                          <div className="collapse" id="demo4">
                            <Link className="list-group-item" to="/activity/facebook/posts">Posts</Link>
                            <Link className="list-group-item" to="/activity/facebook/engage_by">Engaged By</Link>
                            <Link className="list-group-item" to="/activity/facebook/reply_comments">Reply/Comment</Link>
                            <Link className="list-group-item" to="/activity/facebook/story_tags">Story tags</Link>
                          </div>
                           <a href="#demo5" className="list-group-item list-group-item" data-toggle="collapse" data-parent="#MainMenu">Tumbler</a>
                            <div className="collapse" id="demo5">
                            <Link className="list-group-item" to="/activity/tumblr/posts">Posts</Link>
                            <Link className="list-group-item" to="/activity/tumblr/engage_with">Engaged with</Link>
                            <Link className="list-group-item" to="/activity/tumblr/replies">Replies</Link>
                            <Link className="list-group-item" to="/activity/tumblr/hash_tag">Hash tag</Link>
                          </div>
                        </div>
                      </div>
                      
                    </div>  
                  </div>  
                </div>
          </div>