// import React
import {Component} from 'react';
import FeedList from './feedlist.jsx';
import FeedUpload from './feedupload.jsx';


class Feed extends Component {
  render() {
    return (
      <section>
        <FeedList/>
        <FeedUpload/>
      </section>
    )
  }
}


Feed.propTypes = {
  //....
}


export default Feed
