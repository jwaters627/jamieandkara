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
        <h1 className='names'>Weekend Events</h1>
        <div className='day'>
          <h4 className='dayHeading'>Friday</h4>
          <p>4:30 PM: rehearsal at TBD</p>
          <p>5:30 PM: Rehearsal Dinner at TBD</p>
          <p>8:00 PM:Welcome drinks at TBD</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Saturday</h4>
          <p>4:30 PM: Ceremony at Ocean Gateway</p>
          <p>5:00 PM: Cocktails and Reception at Ocean Gateway</p>
          <p>11:00 PM: After party at Ri Ra bar down the street from Ocean Gateway</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Sunday</h4>
          <p>9:00 AM - 11:00AM: Brunch at TBD (Come and go as you please)</p>
        </div>
      </div>

      )

  }
}

export default WeekendEvents;