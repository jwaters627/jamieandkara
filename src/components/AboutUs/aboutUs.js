import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './aboutUs.scss';
import Flamingos from '../../../img/flamingos.png';
import Xmas from '../../../img/xmas.png';
import Engagement from '../../../img/engagement.png';
import FloridaSunset from '../../../img/floridaSunset.png';
import Florida from '../../../img/florida.png';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: [
        Flamingos,
        Xmas,
        Engagement
      ]
    };
    }

  render() {
    return(
      <div className='carousel'>
        <Carousel width='100%' swiping={true} autoplay={false} autoplayInterval={4000} dragging={true}  edgeEasing="easeOutCirc" easing="easeInOutLinear" wrapAround={true}>
            <img src={FloridaSunset} />
            <img src={Flamingos} />
            <img src={Florida} />
            
        </Carousel>
      </div>

      )

  }
}

export default AboutUs;