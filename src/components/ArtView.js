import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtView extends Component {
  componentWillMount() {
    const { artsActions, art, artId } = this.props;

    if (!art) {
      artsActions.getArt(artId);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { art } = this.props;

    if (art) {
      return (
        <div className="row">
          <div className="col-md-5">
            <img src={art.src} className="img-responsive" alt={art.src}/>
          </div>
          <div className="col-md-7">
            <h2>{art.title}</h2>
            Posted on: {art.createdAt}
            <br />
            Likes: {art.liked ? 1 : 0}
            <br />
            <br />
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link className="btn btn-default pull-right" to="/home">
              Back
            </Link>
          </div>
          <br />
          <br />
        </div>
      );
    }
    return <h2>Loading..</h2>
  }
}

export default ArtView;
