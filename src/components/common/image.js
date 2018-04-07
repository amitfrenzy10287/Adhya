import React, { Component } from 'react';
import imageExists from 'image-exists';

class ProfileImage extends Component {

  render() {

    var src             = this.props.image;
    var default_class   = this.props.class;
    var default_width   = this.props.width;
    var default_height  = this.props.height;
    var style = null;
    
    if(default_width || default_height){
        style = {
          width : default_width,
          height: default_height
        };  
    }
    

	 
	imageExists(src, function(exists) {
	  if (!exists) {
	    	src="http://via.placeholder.com/140x100";
	  } 
	});

    return ( 
          <img className={default_class?default_class:"img-responsive"} src={src} style={style} /> 
    );
  }
}

export default ProfileImage; 
