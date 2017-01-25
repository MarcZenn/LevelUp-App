// import React
import React, {Component} from 'react';

// components
import Feed from './feed/feed.jsx';


class Home extends Component {
  render() {
    return (
      <section className='home-content'>
        <h1>Putting Donald Trump in the Oval Office is Like....</h1>
        <Feed />
      </section>
    )
  }
}


Home.propTypes = {

}


export default Home
