// import React
import {Component} from 'react';
import {Link} from 'react-router';


class FeedUpload extends Component {
  render() {
    return (
      <section>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="textbox" placeholder="Go ahead. Tell the world.." className="feed-upload-input" ref="analogy"/>
          <input type="submit" className="feed-upload-input"/>
        </form>
      </section>
    )
  }
  onSubmit() {
    const node = this.refs.analogy;
    const trumpnalogy = node.value;
    this.props.addAnalogy(trumpnalogy);
    node.value = '';
  }
  addAnalogy() {
    
  }
}


FeedUpload.propTypes = {
  addAnalogy: React.PropTypes.func.isRequired
}


export default FeedUpload
