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
          <h4 className='dayHeading'>Thursday</h4>
          <p>Informal gathering for anybody coming to Portland early. Possibly a BYOB harbor cruise.</p>
          <p>Check back for details.</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Friday</h4>
          <p>Rehearsal and Rehearsal Dinner</p>
          <p>By Invitation Only</p>
          <br/>
          <p>Welcome Drinks at Ri Ra</p>
          <p>8:30</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Saturday</h4>
          <p>Ceremony & Reception at Ocean Gateway</p>
          <p>4:00PM</p>
          <br/>
          <p>Short walk to RiRa for the after party.</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Sunday</h4>
          <p>Farewell Brunch at the Portland Regency Hotel in the Armory Lounge.</p>
          <p>Come whenever works for you and grab some food and coffee on your way out. All are welcome.</p>
          <p>9:00AM - 12:00PM</p>
          <br/>
          <br/>
          <p>** Although we love your little ones, our wedding day events are adults only - thanks for understanding! **</p>
        </div>
      </div>
      )

  }
}

export default WeekendEvents;