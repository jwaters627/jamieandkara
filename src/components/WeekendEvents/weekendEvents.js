import React from 'react';

import style from './weekendEvents.scss'

class WeekendEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Kara and Jamie!</h1>
        <p className='descriptionText top'>The wedding of Kara Anne Dalton and James Stryker Waters</p>
        <p className='descriptionText'>May 19, 2018</p>
      </div>

      )

  }
}

export default WeekendEvents;