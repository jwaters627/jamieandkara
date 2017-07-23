import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './aboutUs.scss';
import Flamingos from '../../../img/flamingos.png';
import Xmas from '../../../img/xmas.png';
import FloridaSunset from '../../../img/floridaSunset.png';
import Florida from '../../../img/florida.png';
import LongLake from '../../../img/longLake.png';
import KellysWedding from '../../../img/kellysWedding.png';
import KellyWeddingBeach from '../../../img/kellyWeddingBeach.png';
import SamAndMeg from '../../../img/samAndMeg.png';
import Acoaxet from '../../../img/acoaxet.png';
import BeeHive from '../../../img/beeHive.png';
import Boat from '../../../img/boat.png';
import Kayak from '../../../img/kayak.png';
import LongLakeDockWithAinsley from '../../../img/longLakeDockWithAinsley.png';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: [FloridaSunset, SamAndMeg, Kayak, Acoaxet, LongLake, Flamingos, Florida, BeeHive]
    };
    }

    componentWillMount = () =>{

      if(window.screen.width < 670){
        this.setState({image: [Boat, Xmas, Kayak, LongLakeDockWithAinsley, Florida, KellyWeddingBeach, Acoaxet,  KellysWedding, BeeHive]
        }
          )
      }
      else{
        this.setState({
          image: [FloridaSunset, SamAndMeg, Kayak, Acoaxet, LongLake, Flamingos, Florida, BeeHive,]
        })
      }
    }

  componentDidMount() {
    setTimeout(() => {
      this.triggerResize()
    }, 15);
  }

  triggerResize = () =>{
    console.log('resize')
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  renderImages = (image) =>{
    return(<img src={image} />)
  }

  render() {
    return(
      <div className='carousel'>
        <Carousel width='100%' swiping={true} autoplay={true} autoplayInterval={4000} dragging={true} easing="easeInOutLinear" wrapAround={true}>
            {this.state.image.map(this.renderImages, this)}
        </Carousel>
      </div>

      )

  }
}

export default AboutUs;