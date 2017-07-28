import React from 'react';
import SlideShow from '../SlideShow/slideShow';
import styles from './person.scss';

class WeddingParty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    }

    componentWillMount = () =>{
      console.log(this.props.person)
    }

  render() {
    return(
      <div className='fullContainer'>
        <div className="personContainerFull">
          <p className='closeButton' onClick={this.props.close}>X</p>
          <h2 className='personNameFull'>{this.props.person.name}</h2>
          <SlideShow image={this.props.person.images} />
          <p className='personDescriptionFull'>{this.props.person.description}</p>
        </div>
      </div>
    )
  }
}

export default WeddingParty;