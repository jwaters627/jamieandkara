import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './slideShow.scss';


class SlideShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    };
    }

  componentDidMount() {
    setTimeout(() => {
      this.triggerResize()
    }, 30);
  }

  triggerResize = () =>{
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
            {this.props.image.map(this.renderImages, this)}
        </Carousel>
      </div>
      )

  }
}

export default SlideShow;