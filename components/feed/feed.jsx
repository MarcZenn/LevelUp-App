// import React
import React, {Component} from 'react';

// components
import FeedList from './feedlist.jsx';
import FeedUpload from './feedupload.jsx';


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedlets: []
    }
  }
  addAnalogy(analogy) {
    let {feedlets} = this.state;
    feedlets.push({id: feedlets.length, content: analogy});
    this.setState({
      feedlets: feedlets // trigger runtime render
    });

    // TODO:: send to server
  }
  render() {
    return (
      <section>
        <FeedList feedlets={this.state.feedlets} />
        <FeedUpload addAnalogy={this.addAnalogy.bind(this)} />
      </section>
    )
  }
}


Feed.propTypes = {
 // props
}


export default Feed
