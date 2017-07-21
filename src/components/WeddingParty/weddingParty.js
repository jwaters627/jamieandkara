import React from 'react';

import Willie from '../../../img/willie.png';
import WillD from '../../../img/willD.png';
import Ryan from '../../../img/ryan.png';
import Tim from '../../../img/tim.png';
import Hirsch from '../../../img/hirsch.png';
import Eric from '../../../img/eric.png';
import WillK from '../../../img/willK.png';
import Jess from '../../../img/jess.png';
import Sam from '../../../img/sam.png';
import styles from './weddingParty.scss'

class WeddingParty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      party: [
        {
          key: 0,
          name: 'Willie Waters',
          title: 'Best Man',
          picture: Willie,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 1,
          name: 'Will Duryea',
          title: 'Groomsmen',
          picture: WillD,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 2,
          name: 'Tim McLoughlin',
          title: 'Groomsmen',
          picture: Tim,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 3,
          name: 'Ryan Armstrong',
          title: 'Groomsmen',
          picture: Ryan,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 4,
          name: 'Eric Amoroso',
          title: 'Groomsmen',
          picture: Eric,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 5,
          name: 'Sam Jones',
          title: 'Groomsmen',
          picture: Sam,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 6,
          name: 'Matt Hirsch',
          title: 'Groomsmen',
          picture: Hirsch,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 7,
          name: 'Will Kinder',
          title: 'Groomsmen',
          picture: WillK,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 8,
          name: 'Jess Duryea',
          title: 'Bridesmaid',
          picture: Jess,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
      ]
    };
    }

    componentWillMount = () =>{
      let arr = this.state.party;
      let m = arr.length;
      while(m) {
        let i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]]
      }

      this.setState({party: arr})
    }

    renderParty = (person) =>{
      return(
        <div className='personContainer'>
          <img className='personImage' src={person.picture} />
          <div className="rightContainer">
            <div className='nameAndTitleContainer'>
              <p className='personName'>{person.name}</p>
              <p className='personTitle'>{person.title}</p>
            </div>
            <div className='personDescriptionContainer'>
              <p className='personDescription'>{person.description}</p>
            </div>
          </div>
        </div>)
    }

  render() {
    return(
      <div className="partyContainer">
        {this.state.party.map(this.renderParty, this)}
      </div>

      )

  }
}

export default WeddingParty;