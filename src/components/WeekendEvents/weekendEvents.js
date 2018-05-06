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
          <p>If you're in town on Thursday, we will be gathering at the Portland Lobster Company (<a href="https://www.google.com/maps/place/180+Commercial+St,+Portland,+ME+04101/@43.6556233,-70.2549714,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29c3fae39214b:0x64f57ec7aeff42a8!8m2!3d43.6556194!4d-70.2527774">180 Commercial Street</a>) at 6:30 for dinner. This is a very casual, order-at-the-counter restaurant with outdoor waterfront seating and live music. Bring something warm!</p>
            <p> Then we'll head to the upstairs bar at Boone's Fish House (<a href="https://www.google.com/maps/place/86+Commercial+St,+Portland,+ME+04101/@43.6567599,-70.252344,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29c3f648f3bf7:0xe03187ca2b595ebf!8m2!3d43.656756!4d-70.25015">86 Commercial Street</a>) around 7:30 for drinks!</p>
        </div>
        <div className='day'>
          <h4 className='dayHeading'>Friday</h4>
          <p>Rehearsal and Rehearsal Dinner</p>
          <p>By Invitation Only (please RSVP!)</p>
          <br/>
          <p>Welcome Drinks at Ri Ra</p>
          <p>All are welcome (No RSVP necessary)</p>
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
          <p>Please RSVP</p>
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