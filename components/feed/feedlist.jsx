// import React
import React, {Component} from 'react';

// components
import Feedlets from './feedlet.jsx';


class FeedList extends Component {
  render() {
    const {feedlets} = this.props;
    return (
      <section>
        <ul className="feed-list">
          {
            feedlets.map( feedlet => {
              return (
                <Feedlets key={feedlet.id} feedlet={feedlet} />
              );
            })
          }
        </ul>
      </section>
    )
  }
}


FeedList.propTypes = {
  // feedlets: React.PropTypes.array.isRequired
}


export default FeedList
