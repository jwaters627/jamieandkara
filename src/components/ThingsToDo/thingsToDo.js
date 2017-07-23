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
        <h3>Eat: Try out some of our favorite spots</h3>
        <p>Eventide Oyster</p>
      </div>

      )

  }
}

export default ThingsToDo;