import React from 'react';

import styles from './weekendEvents.scss'

class WeekendEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Kara and Jamie!</h1>
      </div>

      )

  }
}

export default WeekendEvents;