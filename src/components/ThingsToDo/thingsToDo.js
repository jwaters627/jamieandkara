import React from 'react';

import styles from './thingsToDo.scss'

class ThingsToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Things to do in Portland</h1>
      </div>

      )

  }
}

export default ThingsToDo;