import React from 'react';
import SlideShow from '../SlideShow/slideShow';
import styles from './person.scss';
import Cancel from 'react-material-icons/icons/navigation/cancel';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class WeddingParty extends React.Component {

 static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme({
                palette:{
                   
                }
            })
        }
    }
  constructor(props) {
    super(props);
    this.state = {
      
    };
    }

  render() {
    return(
      <div className='fullContainer' onClick={this.props.close}>
        <div className="personContainerFull">
          <Cancel className='cancel' style={{'float':'right', 'width':'44px', 'height':'44px', 'cursor':'pointer'}} onClick={this.props.close}/>
          <h2 className='personNameFull'>{this.props.person.name}</h2>
          <SlideShow image={this.props.person.images} />
          <p className='personDescriptionFull'>{this.props.person.description}</p>
        </div>
      </div>
    )
  }
}

export default WeddingParty;