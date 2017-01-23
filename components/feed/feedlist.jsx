// import React
import {Component} from 'react';
import {Link} from 'react-router';
import Feedlets from './feedlet.jsx';


class FeedList extends Component {
  render() {
    let {feedlets} = this.props;

    return (
      <section>
        <ul className="feed-list">
          {
            feeldets.map( feedlet => {
              return (
                <Feedlets key={feedlet.id} channel={feedlet} />
              );
            })
          }
        </ul>
      </section>
    )
  }
}


FeedList.propTypes = {
  feedlets: React.PropTypes.array.isRequired
}


export default FeedList
