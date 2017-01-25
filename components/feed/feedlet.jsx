// import React
import React, {Component} from 'react';


class Feedlets extends Component {
  render() {
    const {feedlet} = this.props;
    return (
      <li>
        <div>
          {feedlet.content}
        </div>
      </li>
    )
  }
}


Feedlets.propTypes = {
  feedlet: React.PropTypes.object.isRequired
  // add onclick ability to downvote or upvote?
  // add ability to edit or delete once posted
  // add ability to report posts for varous reasons.
}


export default Feedlets
