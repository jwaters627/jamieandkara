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
        <h1 className='names'>Weekend Events (Times subject to change - check back soon!)</h1>
        <div className='day'>
          <h4 className='dayHeading'>Friday</h4>
          <p>Rehearsal and Rehearsal Dinner</p>
          <p>By Invitation Only</p>
          <br/>
          <p>8:00 PM:Welcome drinks at TBD</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Saturday</h4>
          <p>4:30 PM: Ceremony at Ocean Gateway</p>
          <br/>
          <p>5:00 PM: Reception at Ocean Gateway</p>
          <br/>
          <p>11:00 PM: After party at Ri Ra</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Sunday</h4>
          <p>9:00 AM - 11:00AM: Brunch at TBD (Come and go as you please)</p>
          <br/>
          <p>We will be checking ID's at the door...Nobody Under the age of 6!</p>
        </div>
      </div>
      )

  }
}

export default WeekendEvents;