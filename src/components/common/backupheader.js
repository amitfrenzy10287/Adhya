<div>
      <div className="container mb-2">
        <div className="row header">
            <div className="col-lg-12 bg-faded">
              <div className="image">
                <img className="img-thumbnail" src="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg" style={{width: "50px", height: "50px"}}/>
                <span className="mx-2"><b className="cls-font-18">Narendra Modi</b> 
                </span>  
                <div className="following">
                  <a className="btn btn-outline" href="#">Following</a> 
                </div> 
              </div>
              <div className="div_sub_heading"><span className="cls-font-16">In Social Synopsis</span></div>
            </div>
            <div className="panel-right">
                <div className="row">
                    <div className="card-box active">
                        <b>1</b><br/>
                        <small>MEDIA POWER RANK</small>
                    </div>
                    <div className="card-box">
                        <b>57,114,586</b><br/>
                        <small>FOLLOWERS</small>
                    </div>
                    <div className="card-box">
                        <b>49,904,324</b><br/>
                        <small>FANS</small>
                    </div>
                    <div className="card-box">
                        <b>49,904,324</b><br/>
                        <small>LIFETIME TWEETS</small>
                    </div>
                    <div className="card-box">
                        <b>49,904,324</b><br/>
                        <small>MENTIONS LAST 7 DAYS</small>
                    </div>

                    </div>
                </div>
            </div>
      </div>
      <div className="container mb-2 menu-cl mr-bottom">
          <Link className={`btn ${(pathname == 'profile')? 'btn-success' : 'btn-primary' } px-5`} to="/profile">Profile</Link>
          <Link className={`btn ${(pathname == 'activity')? 'btn-success' : 'btn-primary' }  mr-1px px-5`} to="/activity">Activity</Link>
          <Link className={`btn ${(pathname == 'mentions')? 'btn-success' : 'btn-primary' }  mr-1px px-5`} to="/mentions">Mentions</Link>
          <Link className={`btn ${(pathname == 'ranking')? 'btn-success' : 'btn-primary' }  mr-1px px-5`} to="/dashboard">Dashboard</Link>
          <Link className={`btn ${(pathname == 'ranking')? 'btn-success' : 'btn-primary' }  mr-1px px-5`} to="/analytics">Analytics</Link>
      </div>
    </div>