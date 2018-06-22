import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Art extends Component {
  likeArt(event) {
    event.preventDefault();

    const { artsActions, art } = this.props;
    art.liked = !art.liked;

    artsActions.editArtsSuccess(art);
  }

  componentDidMount() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.art-container').addClass('in-mobile');
    }
  }

  render() {
    let { art } = this.props;

    return (
      <Link to={`/view/${art._id}`}>
        <div className="col-md-3" id={art._id}>
          <div className="col-md-12 art-container">
            <div className="image-container" style={{ backgroundImage: `url(${art ? art.src : ''})`}}>
              <div className="info-container">
                <div className="text-holder">
                  {art.title}
                </div>
                <div className={`like-holder ${art.liked ? 'liked' : ''}`} onClick={this.likeArt.bind(this)}>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Art;
