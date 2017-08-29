import React from 'react';
import styles from './aboutUs.scss';
import SlideShow from '../SlideShow/slideShow';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    }


  render() {
    return(
      <div className='aboutUsContainer'>
      <h1 className='oceanGateway'>Ocean Gateway</h1>
        <div className='mainContainer'>
          <img src='http://www.portlandmaine.gov/ImageRepository/Document?documentID=15585' />
          <div className='infoContainer'>
            <h4>Address:</h4>
            <a href='https://www.google.com/maps/place/14+Maine+State+Pier,+Portland,+ME+04101/data=!4m2!3m1!1s0x4cb29c408d56e447:0x3b3c9bfd3cceb74?sa=X&ved=0ahUKEwil86raqazVAhWBdD4KHTkkDAwQ8gEILDAA'><p>14 Maine State Pier Portland, ME 04101</p> </a>
            <h4>Description:</h4>
            <p>Originally designed as a waiting area for incoming cruise ships Ocean Gateway is located in downtown Portland, just a short walk away from many hotels, shops, and restaurants in the city. It has been turned into an event space looking out to the water with windows on two sides.</p>
            <h4>Getting There:</h4>
            <p>We encourage you to walk or take a taxi/Uber to the venue, but there is parking available if you need it. There is a parking lot adjacent to Ocean Gateway.</p>
            <h4>Garage:</h4>
            <a href='https://www.google.com/maps/place/167+Fore+St,+Portland,+ME+04101/@43.6604407,-70.2509203,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29c41752801db:0xdfc54516ff849a5b!8m2!3d43.6604368!4d-70.2487316'><p>Ocean Gateway Garage 167 Fore St, Portland, ME 04101</p></a>
          </div>
        </div>
      </div>
      )

  }
}

export default AboutUs;