// import React
import {Component} from 'react';
import {Link} from 'react-router';
import Feed from './feed/feed.jsx';


class About extends Component {
  render() {
    return (
      <section className='about-content'>
        <p>Ever have the perfect analogy to describe something and no one was around to hear it? An analogy so good, it would literally draw racous applause if you shouted it out loud amidst a crowded room? Don't you hate it when your genius goes unnoticed?</p>
        <p>Well problem solved! We're here to help you share your spectacular comparisons with the rest of America. Please, by all means, tell us what you think about something by describing it to something potentially offensive and completely unrelated. It might make a difference (please see disclaimer as to why it would most likely not make any discernable difference in the world at all).</p>
        <p>Remember to be nice and follow our community expectations.</p>
      </section>
    )
  }
}


About.propTypes = {
  //....
}


export default About
