// import React
import {Component} from 'react';


class Feedlets extends Component {
  render() {
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
}


export default Feedlets
