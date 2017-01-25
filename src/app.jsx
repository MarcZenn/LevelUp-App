// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';
import Feed from '.././components/feed/feed.jsx';


// Master Stylesheet
require('.././public/app.scss');

// While the App Component is the outermost parent Component it will not maintain state, it will not actually be receiving any properties (of its children or its own properties) since it wont actually be serving any functionality. Thus there is no need to definte properties to .propTypes...
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="app">
        {this.props.children}
      </section>
    )
  }
}




export default App
