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
          <p>Welcome Drinks at Ri Ra</p>
          <p>8:00</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Saturday</h4>
          <p>Ceremony & Reception at Ocean Gateway</p>
          <p>Time TBD</p>
          <br/>
          <p>After Party at Ri Ra Following Reception</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Sunday</h4>
          <p>Farewell Brunch TBD (Come and go as you please)</p>
          <br/>
          <br/>
          <p>** Although we love your little ones, our wedding weekend events are adults only - thanks for understanding! **</p>
        </div>
      </div>
      )

  }
}

export default WeekendEvents;