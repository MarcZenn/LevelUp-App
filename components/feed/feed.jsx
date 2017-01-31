// import React
import React, {Component} from 'react';

// components
import FeedList from './feedlist.jsx';
import FeedUpload from './feedupload.jsx';
import Socket from '../.././app/sockets/socket.js';


class Feed extends Component {
  /*
   * constructor
  */
  constructor(props){
    super(props);
    this.state = {
      feedlets: [],
      connected: false
    }
  }

  /*
   * React Lifecycle Hooks
  */
  componentWillMount(){ // called before render

  }
  componentDidMount(){ // called once after render
    let ws = new WebSocket('ws://localhost:4000');
    let socket = this.socket = new Socket(ws);
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('new upload', this.addAnalogy.bind(this));

  }
  componentWillUnmount() { // called before removed

  }

  onConnect(){
    this.setState({connected: true});
    // this.socket.emit('subscribe');
  }
  onDisconnect(){
    this.setState({connected: false});
    // this.socket.emit('unsubscribe');
  }
  addAnalogy(analogy) {
    let {feedlets} = this.state;
    this.socket.emit('new upload', {content: analogy})
  }

  newUpload(upload){
    let {feedlets} = this.state;
    feedlets.push(upload);
    this.setState({feedlets}); // trigger runtime rerender
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
