import React, { Component } from 'react';

import Art from '../containers/ArtContainer'

class Home extends Component {
  componentDidMount() {
    const { artsActions, arts } = this.props;
    
    if(!arts){
      artsActions.getArts();
    }
  }
  
  render() {
    const { arts } = this.props;

    if (arts && arts.length) {
      return (
        <div className="row">
          {arts && arts.length ?
            arts.map(art => <Art key={art} _id={art}/>)
            :
            ''
          }
        </div>
      );
    }
    return <h2>Loading..</h2>
  }
}

export default Home;
