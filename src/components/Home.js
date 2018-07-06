import React, { Component } from 'react';

import Art from '../containers/ArtContainer'

class Home extends Component {
  componentDidMount() {
    const { artsActions, arts } = this.props;
    
    if(!arts){
      artsActions.getArts();
    }
    
    this.callApi()
      .then(res => console.log(res.express))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
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
