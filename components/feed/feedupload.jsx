// import React
import React, {Component} from 'react';

// Notice we're using 'refs' which is far less verbose than using state here.
class FeedUpload extends Component {
  onSubmit(e) {
    // call parent component (Feed) state func then clear val.
    e.preventDefault();
    const node = this.refs.analogy;
    const trumpnalogy = node.value;
    this.props.addAnalogy(trumpnalogy);
    node.value = '';
  }
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
}


FeedUpload.propTypes = {
  addAnalogy: React.PropTypes.func.isRequired
  // add ability to parse post and make sure its nothing super offensive
}


export default FeedUpload
